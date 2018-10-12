import { Component, OnInit, Input } from '@angular/core';

// SERVICES
import { DatabaseService } from "../../services/database.service";

// INTERFACE
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

	constructor( private _booksService:DatabaseService ) {}

	ngOnInit() {
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
		}else {
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
