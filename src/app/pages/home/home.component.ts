import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books } from "../../interface/books.interface";
import { BooksService } from "../../services/books.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	// Para que por defecto se abra pestaña "Todos"
	view_bar:string = 'all';

	constructor() { }

	ngOnInit() {
	}

}
