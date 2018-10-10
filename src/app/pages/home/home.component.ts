import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	view_bar:string = 'all';
	books: any[] = [];

	constructor( private _dbService:DatabaseService ) { 
		
		this._dbService.getData('books')
			.valueChanges()
			.subscribe( data => {
				this.books = [];
				this.books = data;
				
				// Funciona crear metodo en base de datos
				// this._dbService.afs.doc(data[0].user)
				// 	.valueChanges()
				// 	.subscribe( resp => console.log(resp));
			}); 
	}

	ngOnInit() {
	}

}
