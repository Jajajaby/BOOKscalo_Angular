import { Component, OnInit } from '@angular/core';

// SERVICIOS
import { DatabaseService } from '../../services/database.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

	uid:string;
	messages:any = [];
	new_messages:any = [];

	constructor( private _dbService:DatabaseService ) { 
		this.uid = JSON.parse(localStorage.getItem('user')).uid;

		this._dbService.getData('messages-transaction')
			.valueChanges()
			.pipe(
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
				
				for (let m of this.messages){
					if (m.status === false){
						this.new_messages.push(m);
					}
				}
			});
	}

	ngOnInit() {
	}

}
