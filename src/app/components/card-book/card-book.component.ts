import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from "../../services/books.service";

import { Books } from "../../interface/books.interface";

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent implements OnInit {
	
	// Todos los libros
	books: any[] = [];

	// Variable para clonar un libro y que se pueda leer desde el modal
	book_modal: Books;

	// Se inyecta router para redirigir las páginas
	constructor( private router:Router,
				 private _booksService:BooksService ) { 
		
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
