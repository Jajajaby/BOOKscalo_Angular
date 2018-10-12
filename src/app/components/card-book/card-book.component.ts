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
	
	books: any[] = [];

	book_modal: Books = {
		author: 		'', 
		title: 			'', 
		editorial: 		'', 
		type: 			'', 
		genres: 		[], 
		language: 		'', 
		num_page: 		0,
		original: 		false, 
		transaction:	'', 	
		user: 			'', 
		id: 			'', 
		comment: 		'', 
		price: 			0, 
		images: 		[]
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
					
					// cambia la referencia de user por el objeto del usuario
					for(let i=0; i<this.books.length; i++){
						this._booksService.afs.doc(data[i].user)
						.valueChanges()
						.subscribe( resp => this.books[i].user = resp );
					}
				});
		}else { // Consulta con condicion para buscar los libros de cada seccion
			this._booksService.getDataQuery('books', 'transaction', '==', this.type)
				.valueChanges()
				.subscribe( data => {
					this.books = [];
					this.books = data;

					// cambia la referencia de user por el objeto del usuario
					for(let i=0; i<this.books.length; i++){
						this._booksService.afs.doc(data[i].user)
						.valueChanges()
						.subscribe( resp => this.books[i].user = resp );
					}
				});
		}

 	}
}
