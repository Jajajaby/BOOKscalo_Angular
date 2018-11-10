import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

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
  selected_chat_obs: Observable<any>;
  
  constructor( private afs:AngularFirestore ) { 
   
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
    console.log(key);
    this.selected_chat = this.afs.collection<any>('messages-transaction').doc(key);

    this.selected_chat_obs = this.selected_chat.valueChanges();
    
  }

}
