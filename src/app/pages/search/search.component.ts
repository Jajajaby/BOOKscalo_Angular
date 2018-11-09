import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// SERVICES 
import { DatabaseService } from "../../services/database.service";

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
	books:any[] = [];
	authors:any[] = [];
	owners:any[] = [];

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
					// this.categories = this.searchOwner(resp, input);
					// this.books = this.search(1, resp, input);
					// this.authors = this.search(2, resp, input);
					// this.categories = this.search(3, resp, input);
				});

			this._dbService.getData('users')
				.valueChanges()
				.subscribe( users => this.owners = this.searchOwner(users, input) );
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

	// TODO: hay que hacer la busqueda por dueño queda pendiente
	searchOwner(users:any[], search:string){
		let owners = [];
		
		for( let user of users ){	
			let owner = user.name;
				if( owner.indexOf(search.toLowerCase()) >= 0 ) {
					owners.push(user);
				}
		}
		return owners;
	}

	// Busca. Si es 1 el libro, 2 autor y 3 categoría.
	search (i:number, books:any[], search:string){
		let searchBook = [];
		let searchAuthor = [];
		let searchCategories = [];

		for( let book of books ){
			let title = book.title.toLowerCase();
			let author = book.author.toLowerCase();
			let categories = book.genres;

			if( i == 1 && title.indexOf(search.toLowerCase()) >= 0 ) {
				searchBook.push(book);
				return searchBook;
			}else if( i == 2 ){
				for( let book of books ){
					if( author.indexOf(search.toLowerCase()) >= 0 ) {
						searchAuthor.push(book);
					}
				}
				return searchAuthor;
			}else if( i == 3 ){
				for( let category of categories ){
					let cat = category.toLowerCase();
					if( cat.indexOf(search.toLowerCase()) >= 0 ) {
						searchCategories.push(book);
					}
				}
				return searchCategories;
			}
		}
		
	}

}
