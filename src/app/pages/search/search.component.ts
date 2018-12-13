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
	sidebar:any[] = [];
	typeInput:string[] = [];

	constructor( private activatedRoute:ActivatedRoute,
				 private _dbService: DatabaseService ) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe( params => {
			const input:string = params['input'];
			this.typeInput = input.split('.');
			
			
				console.log(input);
				this._dbService.getData('books')
					.valueChanges()
					.subscribe( resp => {
						if( this.typeInput[0] === 'sidebar' ) {
							this.sidebar = this.searchSidebar(resp, this.typeInput[1]);
						}else {
							this.books = this.searchBook(resp, input);
							this.authors = this.searchAuthor(resp, input);
						}
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

	searchOwner(users:any[], search:string) {
		console.log(users);
		let owners = [...users].filter( data => {
			
		});
		
		for( let user of users ){	
			let owner = user.name;
				if( owner.indexOf(search.toLowerCase()) >= 0 ) {
					owners.push(user);
				}
		}
		return owners;
	}

	searchSidebar(books:any[], input:string) {
		let searchCategories = [];

		for( let book of books ) {
		  let categories = book.genres;
		  let flag = false; // con esto valido que se agregue solo 1 vez el mismo libro
		  
		  for( let category of categories ){
		    let cat = category.toLowerCase();

		    if( cat.indexOf(input.toLowerCase()) >= 0 && !flag ) {
		      flag = true;
		      searchCategories.push(book);
		    }
		  }
		}
		console.log(searchCategories);
		return searchCategories;
	}
		
	

}
