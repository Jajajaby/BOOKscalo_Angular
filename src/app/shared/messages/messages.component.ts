import { Component } from '@angular/core';
import { Router } from '@angular/router';

// SERVICIOS
import { DatabaseService } from '../../services/database.service';

import { map } from 'rxjs/operators';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

	uid:string;
	messages:any = [];
	new_messages:number = 0;

	constructor( private _dbService:DatabaseService, private router: Router ) { 
		this.uid = JSON.parse(localStorage.getItem('user')).uid;

		this._dbService.getData('messages-transaction')
			.snapshotChanges()
			.pipe(
				map( actions => actions.map(a => {
          const data = a.payload.doc.data();
					const key = a.payload.doc.id;
					return { key, ...data };
				})),
				map( (res:any) => {
					let arr = [];
					for(let r of res){
						if( r.user_owner === this.uid || r.uid_interested.uid === this.uid )
							arr.push(r);
					}
					return arr;
				})
			)
			.subscribe( data => {
				this.messages = [];
				this.messages = data;
			});

			// Obtener la cantidad de mensajes no leidos
			this._dbService.getDataQuery('messages-transaction', 'status', '==', false)
				.valueChanges()
				.subscribe( data => this.new_messages = data.length );
	}

	showMessage( $key:string ){
		this.router.navigate(['/messages', $key]);
	}
}
