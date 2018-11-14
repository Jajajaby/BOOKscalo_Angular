import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ANGULARFIRE2
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

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
  text_answer:any;
  
  
  constructor(  private _dbService:DatabaseService,
                private afs:AngularFirestore,
                private _date:DateService ) { 

    this.uid = JSON.parse( localStorage.getItem('user') ).uid;
    this.actual_user = JSON.parse( localStorage.getItem('user') );
   
    this.chatsCollection = afs.collection<any>('messages-transaction');
    
    this.chats = this.chatsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const $key = a.payload.doc.id;
        return { $key, ...data };
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


  // Envía el mensaje desde el usuario actual hacia la DB
  // message es el mensaje seleccionado en los chats
	sendMessage(message:any, text_answer:any){
    let answer = {
      [this.uid]: text_answer,
			date:				this._date.actual_date()
    }
    console.log(answer);
    console.log(message);
    // message = message.text.push(answer);
    // TODO: Probar jeje
    // FIXME: 
    console.log(message.key);
    this._dbService.updateData('messages-transaction', message.key,  this.message);
  // updateData( collection:string, id:string, document:any )
    }

}
