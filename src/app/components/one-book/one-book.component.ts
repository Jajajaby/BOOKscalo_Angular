import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

import { Books } from "../../interface/books.interface";
import { DatabaseService } from "../../services/database.service";


@Component({
  selector: 'app-one-book',
  templateUrl: './one-book.component.html'
})
export class OneBookComponent implements OnInit {

	@Input() book:Books;

	editForm:FormGroup;

	constructor( 	private formBuilder: FormBuilder,
					private _dbService:DatabaseService, ) { 
		let user = JSON.parse( localStorage.getItem( "user" ) );
	}

	ngOnInit() {
		// TODO: Ver si eso servía o no fdjlksf
		// this.editForm = new FormGroup({
		// 	title: 			new FormControl(this.book.title)
		// });
	}

}
