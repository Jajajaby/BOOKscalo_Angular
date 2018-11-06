import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DatabaseService } from "../../services/database.service";


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

	books:any[];
	authors:any[];
	categories:any[];

	constructor( private activatedRoute:ActivatedRoute,
				 private _dbService: DatabaseService ) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe( params => {
			let input = params['input'];
			
			this._dbService.getData('books')
				.valueChanges()
				.subscribe( resp => {
					this.books = this.searchBook(resp, input);
					this.authors = this.searchAuthor(resp, input);
					this.categories = this.searchCategories(resp, input);
				});
			
		});
	}

	searchBook(books:any[], search:string): any[]{
		let searchBook = [];
		
		for( let book of books ){
			let title = book.title.toLowerCase();
			if( title.indexOf(search.toLowerCase()) >= 0 ) {
				searchBook.push(book);
			}
		}
		return searchBook;
	}

	searchAuthor(books:any[], search:string){
		let searchAuthor = [];
		
		for( let book of books ){
			let author = book.author.toLowerCase();
			if( author.indexOf(search.toLowerCase()) >= 0 ) {
				searchAuthor.push(book);
			}
		}
		return searchAuthor;
	}

	searchCategories(books:any[], search:string){
		let searchCategories = [];
		
		for( let book of books ){	
			let categories = book.genres;
			for( let category of categories ){
				let cat = category.toLowerCase();
				if( cat.indexOf(search.toLowerCase()) >= 0 ) {
					searchCategories.push(book);
				}
			}
		}
		return searchCategories;
	}

}
