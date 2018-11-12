import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ANGULARFIRE2
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

// SERVICES
import { DateService } from '../../services/date.service';
import { DatabaseService } from 'src/app/services/database.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  
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
  
  constructor(  private _dbService:DatabaseService,
                private afs:AngularFirestore,
                private _date:DateService ) { 

    this.uid = JSON.parse( localStorage.getItem('user') ).uid;
    this.actual_user = JSON.parse( localStorage.getItem('user') );
   
    this.chatsCollection = afs.collection<any>('messages-transaction');
    
    this.chats = this.chatsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const key = a.payload.doc.id;
        return { key, ...data };
      }))
    );
  }

  ngOnInit() {

  }

  showMessages( key:string ){
    this.selected_chat = this.afs.collection<any>('messages-transaction').doc(key);
    this.selected_chat
      .valueChanges()
      .subscribe( data => this.message = data );
  }


  // Envía el mensaje desde el usuario actual hacia el usuario dueño del libro
	sendMessage(){
     let answer_msg = new FormGroup({
      text: 						new FormControl([], Validators.required),
			day: 							new FormControl(this._date.actual_day),
			hour: 						new FormControl(this._date.actual_hour),
     });

     // Envía el mensaje a la DB.
    //  updateData( collection:string, id:string, document:any )
	// 	this._dbService.updateData('messages-transaction', predet_Message)
	// 		.then( () => swal('Mensaje enviado', 'Su mensaje ha sido enviado con éxito', 'success') )
	// 		.catch( () => swal('Error', 'Su mensaje no ha podido enviarse, vuelva a intentarlo', 'error') );
	// }
    }

}
