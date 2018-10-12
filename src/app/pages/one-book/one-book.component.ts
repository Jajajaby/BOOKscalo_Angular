import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName  } from "@angular/forms";

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
		this.editForm = new FormGroup({
			title: 			new FormControl(this.book.title)
		// this.editForm = this.formBuilder.group({
	 //      	title:		[this.book.title]
			// author: 		['', Validators.required],
			// editorial: 		['', Validators.required],
			// type: 			['', Validators.required],
			// genres: 		['', Validators.required],
			// transaction: 	['', Validators.required],
			// price: 			[''],
			// language: 		['', Validators.required],
			// original: 		['', Validators.required],
			// num_pages: 		['', Validators.required],
			// comment: 		[''],
			// images: 		['']
		});

		// this._dbService.getData(this.book.user)
		// 	.valueChanges()
		// 	.subscribe( data => console.log(data) );


		// this._dbService.getDataQuery('users', 'user', '==', this.book.user)
		// 	.valueChanges()
		// 	.subscribe( data => console.log(data) );

	}

	jj() {
	    let credentials = this.editForm.value;
	    console.log( credentials );
  	}

  	modal(){
  		console.log( this.book.id );
  		console.log("aaa" + this.book.title);

		

  	}


}
