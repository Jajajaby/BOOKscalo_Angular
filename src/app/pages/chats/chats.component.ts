import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
  
  constructor( private afs:AngularFirestore ) { 

    this.uid = JSON.parse( localStorage.getItem('user') ).uid;
   
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
    // console.log(key);
    this.selected_chat = this.afs.collection<any>('messages-transaction').doc(key);
    this.selected_chat
      .valueChanges()
      .subscribe( data => this.message = data );
  }

}
