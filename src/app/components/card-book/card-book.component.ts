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

	@Input() type:string;
	
	// Todos los libros
	books: any[] = [];

	// Variable para clonar un libro y que se pueda leer desde el modal
	book_modal: Books = {
		author: '', title: '', editorial: '', type: '', genres: [], language: '', num_page: 0,
		original: false, transaction: '', 	user: '', id: '', comment: '', price: 0, images: []
	};

	// Se inyecta router para redirigir las páginas
	constructor( private _booksService:DatabaseService ) {}

	// cuando se trabaja con Input() se debe usar el ngOnInit y no el constructor
	ngOnInit() {
		// si queremos mostrar todos los libros hacemos una consulta general a la bd
		if(this.type === 'all') {
			this._booksService.getData('books')
				.valueChanges()
				.subscribe( data => {
					this.books = [];
					this.books = data;
				});
		}else { // Consulta con condicion para buscar los libros de cada seccion
			this._booksService.getDataQuery('books', 'transaction', '==', this.type)
				.valueChanges()
				.subscribe( data => {
					this.books = [];
					this.books = data;
				});
		}

 	}
}
