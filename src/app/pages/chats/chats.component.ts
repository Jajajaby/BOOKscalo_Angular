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
  answer_text:any;
  
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
    this.answer_text = new FormGroup({
      text: 					new FormControl('', Validators.required),
    });

  }

  showMessages( key:string ){
    this.selected_chat = this.afs.collection<any>('messages-transaction').doc(key);
    this.selected_chat
      .valueChanges()
      .subscribe( data => this.message = data );
  }


  // Envía el mensaje desde el usuario actual hacia la DB
	sendMessage(message:any){
    let answer = { 
      [this.uid]: 	this.answer_text.value.text, 
      date: 				this._date.actual_date()
    }

     this._dbService.getDataQuery('messages-transaction', 'mesages', '===', 'message.uid' )
    message = message.text.push(answer);

    console.log(message);

    // this._dbService.updateData('messages-transaction', message.)()
  // updateData( collection:string, id:string, document:any )
    }

}
