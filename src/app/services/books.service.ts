import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Book } from "../interface/book.interface";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

	fireURL:string = "https://booksapp-chile.firebaseio.com/libros.json";
	bookURL:string = "https://booksapp-chile.firebaseio.com/libros/";

	constructor(private http:Http) { 
	}

	newBook ( book:Book ){
		// Lo que se va a mandar
		let body = JSON.stringify( book );

		// Definición del encabezado de la petición
		let headers = new Headers({
			'Content-Type':'application/json'
		});

		// Observable para ver si se insertó o no
		return this.http.post( this.fireURL, body, { headers } )
			.pipe(map( res=>{
				console.log(res.json());
				return res.json();			// Esta es la respuesta
			}));
	}


	updateBook ( book:Book, key$:string ){
		// Lo que se va a mandar
		let body = JSON.stringify( book );

		// Definición del encabezado de la petición
		let headers = new Headers({
			'Content-Type':'application/json'
		});

		// Url con el libro específico
		let url = `${ this.bookURL}/${ key$ }.json`;

		// Observable para ver si se actualizó o no
		// Método PUT
		return this.http.put( url, body, { headers } )
			.pipe(map( res=>{
				console.log(res.json());
				return res.json();			// Esta es la respuesta
			}));
	}


	// Para obtener un libro 
	getBook( key$:string ){
		let url = `${ this.bookURL }/${ key$ }.json`;
		return this.http.get(url)
			.pipe( map( res=>res.json()));
	}

	// Para obtener todos los libros 
	getBooks( ){
		return this.http.get( this.fireURL )
			.pipe( map( res=>res.json()));
	}
}
