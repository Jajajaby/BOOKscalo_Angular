import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from "../../services/books.service";


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

	books:any[] = [];

	constructor( private activatedRoute:ActivatedRoute,
				 private _booksService: BooksService ) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe( params => {
			console.log( params['input'] );
			this.books = this._booksService.seachBooks( params['input'] );
			console.log(this.books);
		});

	}

}
