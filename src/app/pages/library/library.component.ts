import { Component, OnInit } from '@angular/core';

// Services
import { DatabaseService } from "../../services/database.service";

// RXJS
import { map } from 'rxjs/operators';

// SWAL
import swal from 'sweetalert';

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
			.snapshotChanges()
			.pipe(
				map(actions => actions.map(a => {
					const data = a.payload.doc.data();
					const key = a.payload.doc.id;
					return { key, ...data };
				}))
			).subscribe( data => {
				this.books = [];
				this.books = data;
			});
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
		// Actualiza la data según el id y el documento a modificar
		this._dbService.updateData( "books", this.book_modal.key, this.book_modal )
			.then( () => {
				swal('Cambios guardados', 'Sus cambios han sidos guardados con exito', 'success');
			})
			.catch( () => {
				swal('Error al editar', 'Por favor vuelva a intentarlo', 'error');
			});
	}

}
