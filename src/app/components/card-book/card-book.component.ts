import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent implements OnInit {
	
	// El Input quiere decir que la propiedad puede venir desde fuera
	@Input() book:	any = {};
	@Input() index:	number ;

	// se inyecta router para redirigir las páginas
	constructor( private router:Router) { }

	ngOnInit() {
 	}


 	showBook(i) {
 		console.log( this.index );
 		// UNLIBRO es el nombre de la página a la que se va a redirigir
 		// index es el índice del libro que se va a mostrar
 		// this.router.navigate( ['/UNLIBRO', this.index] );

 	}

}
