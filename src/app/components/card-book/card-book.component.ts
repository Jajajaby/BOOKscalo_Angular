import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from "../../services/books.service";


@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent implements OnInit {
	
	// El Input quiere decir que la propiedad puede venir desde fuera
	@Input() book:	any = {};
	@Input() index:number;

	// Todos los libros
	books: any[] = [];

	// Se inyecta router para redirigir las páginas
	constructor( private router:Router,
				 private _booksService:BooksService ) { 
		
		this._booksService.getData('books')
			.valueChanges()
			.subscribe( data => {
				this.books = [];
				this.books = data;
			});

		// consulta con query
		// this._booksService.getDataQuery('books', 'original', '==', false)
		// 	.valueChanges()
		// 	.subscribe( data => console.log(data) );


		// Agrega un documento con id personalizado
		// this._booksService.addDataIdCustom('books', 'libro2', {name: 'hola'})
		// 	.then();


		// Agrega un documento con id generado automaticamente
		// this._booksService.addData('books', {name: 'aa'}).then();
	}

	ngOnInit() {
 	}

 	// Para mostrar un solo libro en la página
 	showBook(i) {
 		console.log( this.index );
 		// book es el nombre de la página a la que se va a redirigir
 		// index es el índice del libro que se va a mostrar
 		this.router.navigate( ['/book', this.index] );
 	}



}
