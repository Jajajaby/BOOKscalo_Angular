import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from "../../interface/book.interface";
import { BooksService } from "../../services/books.service";


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent implements OnInit {

	private book:Book = {
		title:"",
		author:"",
		editorial:""
	}

	nuevo:boolean = false;
	id:string;

	constructor( private _booksService:BooksService,
				 private router:Router,
				 private activatedRoute:ActivatedRoute ) { 

		// Observable
		this.activatedRoute.params
			.subscribe(parametros=>{
				this.id = parametros['id']
				if ( this.id !== "nuevo" ){
					this._booksService.getBook( this.id )
						.subscribe( book => this.book = book )					
				}
			});
	}

	ngOnInit() {
	}

	// Función para guardar y actualizar el libro
	saveBook(){
		console.log(this.book);

		if( this.id == "nuevo" ){
			// Insertando
			this._booksService.newBook( this.book )
				.subscribe(data=>{
					this.router.navigate(['/book', 'data.title'])
				}, 
				error=>console.error(error));
		}else{
			// Actualizando
			this._booksService.updateBook( this.book, this.id )
				.subscribe(data=>{
					console.log(data);
				}, 
				error=>console.error(error));
		}
	}

	addNewBook( forma:NgForm ){
		this.router.navigate(['/book', 'nuevo']);
		forma.reset();
		// Para resetear pero dejar un elemento como default
		// forma.reset( {
			// casa:"Marvel" 
		// });

	}

}

				