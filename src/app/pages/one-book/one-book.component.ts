import { Component, OnInit } from '@angular/core';
import { BooksService } from "../../services/books.service";

@Component({
  selector: 'app-one-book',
  templateUrl: './one-book.component.html'
})
export class OneBookComponent implements OnInit {

  	// Todos los libros
	books: any[] = [];

	// Se inyecta router para redirigir las páginas
	constructor( private _booksService:BooksService) { 
		// Procedimiento para leer el servicio
		
	}

  ngOnInit() {
  }

}
