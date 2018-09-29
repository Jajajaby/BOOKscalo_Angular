import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DatabaseService } from "../../services/database.service";


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

	books:any[] = [];

	constructor( private activatedRoute:ActivatedRoute,
				 private _dbService: DatabaseService ) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe( params => {
			console.log( params['input'] );
			this.books = this._dbService.seachBooks( params['input'] );
			console.log(this.books);
		});

	}

}
