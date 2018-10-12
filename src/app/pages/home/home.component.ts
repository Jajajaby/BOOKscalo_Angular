import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	view_bar:string = 'all';
	books: any[] = [];

	constructor( private _dbService:DatabaseService ) { 
		
		this._dbService.getData('books')
			.valueChanges()
			.subscribe( data => {
				this.books = [];
				this.books = data;
				
				for(let i=0; i<this.books.length; i++){
					this._dbService.afs.doc(data[i].user)
					.valueChanges()
					.subscribe( resp => this.books[i].user = resp );
				}
			}); 
			
	}

	ngOnInit() {

		setTimeout( () => {
			console.log(this.books);
		}, 3000);
	}
}
