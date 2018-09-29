import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


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
	book_modal: any;

	constructor( 	private _dbService:DatabaseService ) { 
		let user = JSON.parse( localStorage.getItem( "user" ) );

		this._dbService.getDataQuery( "books", "user", "==", "users/" + user.uid)
			.snapshotChanges().pipe(
				map(actions => actions.map(a => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				}))
			).subscribe((data:any) => {
				// this.books = [];
				// this.books = data;
				console.log(data);
			})
	}

	ngOnInit() {
		// Variable para clonar un libro y que se pueda leer desde el modal
		this.book_modal = {
			author: 		'', 
			title: 			'', 
			editorial: 		'', 
			type: 			'', 
			genres: 		[], 
			language: 		'', 
			num_page: 		0,
			original: 		false, 
			transaction: 	'', 	
			user: 			'', 
			id: 			'', 
			comment: 		'', 
			price: 			0, 
			images: 		[]
		};
	}

	updateBook(){
		console.log(this.book_modal);

		// Actualiza la data según el id y el documento a modificar
		this._dbService.updateData( "books", this.book_modal.id, this.book_modal );

	}

}
