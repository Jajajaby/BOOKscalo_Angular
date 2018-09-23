import { Component, OnInit, Input } from '@angular/core';

import { Books } from "../../interface/books.interface";


@Component({
  selector: 'app-one-book',
  templateUrl: './one-book.component.html'
})
export class OneBookComponent implements OnInit {

	@Input() book:Books;

	constructor( ) { 

	}

	ngOnInit() {
		console.log(this.book);
	}

}
