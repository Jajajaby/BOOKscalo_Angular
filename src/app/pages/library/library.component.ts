import { Component, OnInit } from '@angular/core';

// Services
import { DatabaseService } from "../../services/database.service";

// Interfaces
import { Books } from '../../interface/books.interface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html'
})
export class LibraryComponent implements OnInit {

	// Todos los libros
	books: any[] = [];

	// Variable para clonar un libro y que se pueda leer desde el modal
	book_modal: Books = {
		author: '', title: '', editorial: '', type: '', genres: [], language: '', num_page: 0,
		original: false, transaction: '', 	user: '', id: '', comment: '', price: 0, images: []
	};

	constructor( private _dbService:DatabaseService ) { 
		let user = JSON.parse( localStorage.getItem( "user" ) );

		this._dbService.getDataQuery( "books", "user", "==", "users/" + user.uid)
			.valueChanges().subscribe( data => {
				console.log(data);
				this.books = [];
				this.books = data;
			})
	}

	ngOnInit() {
		
 	}

}
