import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ANGULARFIRE2
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// SERVICES
import { DateService } from '../../services/date.service';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';

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
  key:string;
  
  
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
    this.message.status = false;
    this._dbService.updateData('messages-transaction', this.key, this.message);
    this.text_answer = undefined;
      
    }

}
