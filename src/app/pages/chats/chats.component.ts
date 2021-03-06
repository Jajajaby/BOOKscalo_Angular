import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ANGULARFIRE2
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// SERVICES
import { DateService } from '../../services/date.service';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';

import swal from 'sweetalert';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  
  // Referencias a las colecciones
  private chatsCollection: AngularFirestoreCollection<any>;
  private selected_chat: AngularFirestoreDocument<any>;

  // Observables a las colecciones
  chats: Observable<any[]>;
  message:any = {
    uid_interested: ''
  };
  
  uid:string;
  actual_user:string;
  text_answer:any;
  key:string = undefined;
  
  
  constructor(  private _dbService:DatabaseService,
                private afs:AngularFirestore,
                private _date:DateService,
                private route: ActivatedRoute ) { 

    this.route.params
    .subscribe( params => {
      this.uid = JSON.parse( localStorage.getItem('user') ).uid;
      this.actual_user = JSON.parse( localStorage.getItem('user') );
      
      // Si es que viene un mensaje en la ruta lo abrimos
      if( params['key'] !== undefined && params['key'] !== null ) this.showMessages(params['key']);

      this.chatsCollection = afs.collection('messages-transaction')
      this.chats = this.chatsCollection.snapshotChanges()
        .pipe(
          map( actions => actions.map( a => {
            const data = a.payload.doc.data();
            const key = a.payload.doc.id;
            
            // Filtro los datos para obtener solo en los que aparezco
            if( data.user_owner === this.uid || data.uid_interested.uid === this.uid ){
              return { key, ...data };
            }
          }))
        );
    });
  }

  showMessages( key:string ){
    this.key = key; // Para que se pueda ver desde el otro método

    this.selected_chat = this.afs.collection<any>('messages-transaction').doc(key);
    this.selected_chat
      .valueChanges()
      .subscribe( data => {
        this.message = data;
        
         // Actualiza que el mensaje está leído
        if( !this.message.status && this.message.text[this.message.text.length - 1][this.uid] === undefined ){
          this.message.status = true;
          this._dbService.updateData('messages-transaction', key, this.message);
        }
      });
  }


  // Envía el mensaje desde el usuario actual hacia la DB
	sendMessage(message:any, text_answer:any){
    if( this.text_answer === undefined || this.text_answer === null || this.text_answer === "" ){
			swal( 'Debe ingresar un texto para responder', '', 'warning');
			return;
		}
    let answer = {
      [this.uid]: text_answer,
			date:				this._date.actual_date()
    }

    this.message.text.push(answer);
    this.message.status = false; // Para dejar el mensaje nuevo como no leído
    this._dbService.updateData('messages-transaction', this.key, this.message);
    this.text_answer = undefined; // Deja en blanco el campo para escribir el mensaje/chat    
  }

    transactionDone(){
      swal({
        title: "Confirmas que se estableció la transacción?",
        text: "Confirmar esto implica que ustedes fijaron horario, día y lugar para la transacción",
        icon: "warning",
        buttons: ["Cancelar", "Confirmar"],
        dangerMode: true
      })
      .then(( done ) => {
        if ( done ) {
          this._dbService.getDataQuery('books', 'id', '==', this.message.book.id)
            .snapshotChanges()
            .pipe(
              map( actions => actions.map( a => {
                const data = a.payload.doc.data();
                const key = a.payload.doc.id;
                return { key, ...data };
              }))
            )
            .subscribe( (data:any) => {
              if( data[0].status === 'completed' ) {
                // FIXME:
                // swal('Error', 'No se puede establecer la transacción porque existe otra transacción en curso', 'error');
              }else{
                let send:any = data[0];
                send.status = 'completed';
                const KEY = send.key;
                delete send.key;
                
                send.date_transaction = this._date.actual_date();
                
                this._dbService.updateData('books', KEY, send)
                .then( () => {
                    swal("Transacción establecida", "Recuerda borrar el libro de tu librería en un plazo menor a 48 horas o lo eliminaremos nosotros.", {
                      icon: "success"
                    });
                  })
                  .catch( () => swal("Error al confirmar transaccion", "Vuelva a intentarlo", 'error'));
                }
            });
        } else {
          swal("Recuerda avisarnos cuando establezcan la transacción");
        }
      });
    }

}
