import { Component, OnInit, Input } from '@angular/core';

// Services
import { DatabaseService } from "../../services/database.service";

// Interfaces
import { Books } from '../../interface/books.interface';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent implements OnInit {
	
	// Todos los libros
	books: any[] = [];

	// Variable para clonar un libro y que se pueda leer desde el modal
	book_modal: Books = {
		author: '', title: '', editorial: '', type: '', genres: [], language: '', num_page: 0,
		original: false, transaction: '', 	user: '', id: '', comment: '', price: 0, images: []
	};

	// Se inyecta router para redirigir las páginas
	constructor( private _booksService:DatabaseService ) { 
		this._booksService.getData('books')
			.valueChanges()
			.subscribe( data => {
				this.books = [];
				this.books = data;
			});
	}

	ngOnInit() {
		
 	}
}
