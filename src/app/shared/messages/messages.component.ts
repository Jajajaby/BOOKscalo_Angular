import { Component, OnInit } from '@angular/core';

// SERVICIOS
import { DatabaseService } from '../../services/database.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

	uid:string;
	messages:any[];

	constructor( private _dbService:DatabaseService ) { 
		this.uid = JSON.parse(localStorage.getItem('user')).uid;
		this.messages = [];
		this._dbService.getDataQuery('messages-transaction', 'user_owner', '==', this.uid)
			.valueChanges()
			.subscribe( data => {
				this.messages = [];
				this.messages = data;
			});
	}

	ngOnInit() {
	}

}
