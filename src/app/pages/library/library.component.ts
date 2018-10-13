import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

// SERVICE
import { DatabaseService } from "../../services/database.service";

// SWEET ALERT
import swal from 'sweetalert';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html'
})
export class LibraryComponent implements OnInit {

	books: any[] = [];
	book_modal: any;

	constructor( private _dbService:DatabaseService ) { 
		let user = JSON.parse( localStorage.getItem( "user" ) );

		this._dbService.getDataQuery( "books", "uid", "==", user.uid)
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
		this.book_modal = {
			author: 		'', 
			title: 			'', 
			editorial: 		'', 
			type: 			'', 
			genres: 		[], 
			language: 		'', 
			num_page: 		'',
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
		this._dbService.updateData( "books", this.book_modal.key, this.book_modal )
			.then( () => {
				swal('Cambios guardados', 'Sus cambios han sidos guardados con éxito', 'success');
			})
			.catch( () => {
				swal('Error al editar', 'Por favor, vuelva a intentarlo', 'error');
			});
	}

	deleteBook(){
		this._dbService.deleteData( "books", this.book_modal.key )
			.then( () => {
				swal('Libro eliminado', 'El libro seleccionado ha sido eliminado', 'success');
			})
			.catch( () => {
				swal('Error al eliminar', 'Por favor, vuelva a intentarlo', 'error');
			});
	}

}
