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
	@Input() index:	number ;

	// Todos los libros
	books: any[] = [];

	// Se inyecta router para redirigir las páginas
	constructor( private router:Router,
				 private _booksService:BooksService) { 
		// Procedimiento para leer el servicio
		this._booksService.getBooks()
			.subscribe( data =>{
				console.log(data);
				this.books = data;
			})
	}

	ngOnInit() {
 	}

 	// Para mostrar un solo libro en la página
 	showBook(i) {
 		console.log( this.index );
 		// UNLIBRO es el nombre de la página a la que se va a redirigir
 		// index es el índice del libro que se va a mostrar
 		this.router.navigate( ['/book', this.index] );
 	}



}
