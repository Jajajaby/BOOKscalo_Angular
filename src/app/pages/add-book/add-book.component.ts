import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Books } from "../../interface/books.interface";
import { BooksService } from "../../services/books.service";

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

// ANGULARFIRE2
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent implements OnInit {

	// Para el formulario
	forma:FormGroup;
	tamImgs:number = 0; 			// cantidad de imagenes válidas que se muestran en el formulario
	urlImgs:any[]; 					// aquí se guardan las rutas de las imagenes para guardar en firebase
	loader_img:boolean = false; 	// para cargar las imagenes
	
	nuevo:boolean = false;
	id:string;

	constructor( private _booksService:BooksService,
					 private activatedRoute:ActivatedRoute,
					 private storage: AngularFireStorage 
				) { 
		// Observable
		this.activatedRoute.params
			.subscribe( parametros=> {
				this.id = parametros['id']
			});
	}

	// Inicializando el formulario
	ngOnInit() {
		this.forma = new FormGroup({
			title: 			new FormControl(undefined, Validators.required),
			author: 		new FormControl(undefined, Validators.required),
			editorial: 		new FormControl(undefined, Validators.required),
			type: 			new FormControl(undefined, Validators.required),
			genres: 		new FormControl(undefined, Validators.required),
			transaction: 	new FormControl(undefined, Validators.required),
			price: 			new FormControl(undefined),
			language: 		new FormControl(undefined, Validators.required),
			original: 		new FormControl(undefined, Validators.required),
			num_pages: 		new FormControl(undefined, Validators.required),
			comment: 		new FormControl(undefined),
			images: 		new FormControl(undefined)
		});
	}

	// Función para guardar el libro
	saveBook(){
		// Si la forma no es valida no se realiza la carga a firebase
		if( this.forma.invalid ){
			console.log('Formulario no valido');
			return;
		}
		
		// Se ponen las imagenes en la forma para luego subirlas
		this.forma.patchValue({
			images: this.urlImgs
		});

		// Se guarda la forma para validar
		const book:Books = this.forma.value; 

		// Se guarda el libro 
		this._booksService.addData('books', book)
			.then( () => console.log("se guardo el libro") )
			.catch( (err) => console.log("error al guardar libros", err) );
	}


	// Carga las imagenes al storage de Firebase
	uploadFile(event) {
		this.loader_img = true;
		console.log(this.loader_img);
		this.tamImgs = 0;
		const files = event.target.files;
		let url = []; // guarda las imagenes correctas para luego subirlas

		// Para ir subiendo las imagen 1 a 1
		for( let i=0; i<files.length; i++ ){
			setTimeout( () => {
				const separatedFile = files[i].name.split('.');
				const extension = separatedFile[separatedFile.length - 1];
				
				// Tipos de archivo válidos para las imagenes
				const typeValid = ['jpg', 'jpeg', 'png'];
	
				// Si el tipo de imagen corresponde a las especificadas, es válido
				if( typeValid.indexOf( extension ) >= 0 ){
					const filePath = files[i].name;
					
					const ref = this.storage.ref('images/'+ filePath);
					ref.put(files[i]);
					
					// Se obtiene la ruta donde se va a guardar y se deja en una array
					ref.getDownloadURL()
						.subscribe( resp => {
							console.log(resp);
							this.tamImgs += 1;
							url.push(resp);
						});
				// Si el tipo de imagen no corresponde a las especificadas, no es válido
				}else {
					console.log('Tipo de imagen no valido');
				}
			}, 500);
		}
		this.urlImgs = url; // para pasar las rutas a un array global
		this.loader_img = false;
	 }
}

				