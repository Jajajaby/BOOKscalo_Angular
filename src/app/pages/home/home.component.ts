import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books } from "../../interface/books.interface";
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	// Para que por defecto se abra pestaña "Todos"
	view_bar:string = 'all';

	// Todos los libros
	books: any[] = [];

	constructor( private _dbService:DatabaseService ) { 
		
		this._dbService.getData('books')
			.valueChanges()
			.subscribe( data => {
				this.books = [];
				this.books = data;
			}); 
	}

	ngOnInit() {
	}

}
