import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CATEGORIES } from '../../../data/categories.data';



// SERVICES
import { DatabaseService } from 'src/app/services/database.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  books:any;

  menu:any=[];
  categories:any[] = CATEGORIES;
  role:any;

  constructor(  private _dbService:DatabaseService, 
                private router: Router,
                private _sidebar:SidebarService ) { 
    this.menu = this._sidebar.menu;
    this.role = JSON.parse(localStorage.getItem("user")).role;
  }

  ngOnInit() {
    this._dbService.getData('books')
		  .valueChanges()
			.subscribe( data => this.books = data );
  }

  // Busca los libros según el search, que es la categoría.
  searchCategory( search:string ){
    let searchCategories = [];

    for( let book of this.books ) {
      let categories = book.genres;
      let flag = false; // con esto valido que se agregue solo 1 vez el mismo libro
      
      for( let category of categories ){
        let cat = category.toLowerCase();

        if( cat.indexOf(search.toLowerCase()) >= 0 && !flag ) {
          flag = true;
          searchCategories.push(book);
        }
      }
    }
    this.router.navigate(['/search', search]);
  }

}
