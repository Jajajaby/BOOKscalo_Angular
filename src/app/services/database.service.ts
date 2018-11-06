import { Injectable } from '@angular/core';
import { Books } from "../interface/books.interface";

// Angularfire2
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	books: any[] = [];

	constructor( public afs: AngularFirestore ) {
	} 

	// Retorna Observable
	// Trae toda la data de una colección específica.
	public getData( collection:string ){
		return this.afs.collection<any>( collection );
	}

	// Retorna Observable
	// Trae la data que se especifica en la query, de una colección específica.
	public getDataQuery( collection:string, query:string, operator:any, value:any ){
		return this.afs.collection<any>( collection, ref => ref.where(query, operator, value));
	}
	
	// Retorna Promesa
	// Agrega data con identificador específico.
	public addDataIdCustom( collection:string, id:string, document:any ){
		return this.afs.collection<any>( collection ).doc( id ).set( document );
	}

	// Retorna Promesa
	// Agrega data sin identificador específico
	public addData( collection:string, document:any ){
		return this.afs.collection<any>( collection ).add( document );
	}

	// Retorna Promesa
	// Actualiza la data según el id y el documento a modificar
	public updateData( collection:string, id:string, document:any ){
		return this.afs.collection<any>( collection ).doc( id ).update( document );
	}

	// Retorna Promesa
	// Borra la data según el id especificado
	public deleteData( collection:string, id:string ){
		return this.afs.collection<any>( collection ).doc( id ).delete();
	}
}