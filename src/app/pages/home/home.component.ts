import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from "../../services/database.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	view_bar:string = 'all';
	books:any[] = [];
	firtSession = null;
	preferences = null;

	constructor( private _dbService:DatabaseService, private route:Router ) {
		const UID = JSON.parse(localStorage.getItem('user')).uid;
		console.log(UID);

		this._dbService.getDataQuery('books', 'status', '==', 'available')
			.valueChanges()
			.subscribe( data => {
				this.books = [];
				this.books = data;
			
				// Cambia la referencia del user por el objeto del usuario
				for(let i=0; i<this.books.length; i++){
					this._dbService.afs.doc(data[i].user)
						.valueChanges()
						.subscribe( resp => this.books[i].user = resp );
				}
			});
			
		this._dbService.getDataQuery('users', 'uid', '==', UID)
			.valueChanges()
			.subscribe( data => {
				let user = data[0];
				if( user.preferences !== undefined && user.preferences !== null )
					this.preferences = user.preferences.length;
				else 
					this.preferences = 0;

				if( !user.firtSession ) {
					user.firtSession = true;
					this._dbService.updateData('users', UID, user);
				}
			});
	}
		
	ngOnInit() {}
	
	preferencesRoute() {
		this.route.navigate(['/profile', {input: 'preferences'}]);
	}
	
}
