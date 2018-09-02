import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // no se usa hasta el momento aqui

import { Books } from "../../interface/books.interface";
import { BooksService } from "../../services/books.service";

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

// Angularfire2
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent implements OnInit {

	// Para el formulario
	forma:FormGroup;
	tamImgs:number = 0; // la cantidad de imagenes correctas que se muestra en pantalla
	urlImgs:any[]; // aquí se guardan las rutas de las images para guardar en firebase
	loader_img:boolean = false; // hace un pequenio efecto de carga al momento de subir las imagenes
	
	nuevo:boolean = false;
	id:string;

	constructor( private _booksService:BooksService,
					 private router:Router, // no se usa hasta el momento aquí
					 private activatedRoute:ActivatedRoute,
					 private storage: AngularFireStorage 
				) { 
		// Observable
		this.activatedRoute.params
			.subscribe( parametros=> {
				this.id = parametros['id']
			});
	}

	// Se inicializa la forma con FormGroup para llenar el formulario
	ngOnInit() {
		this.forma = new FormGroup({
			title: new FormControl(undefined, Validators.required),
			author: new FormControl(undefined, Validators.required),
			editorial: new FormControl(undefined, Validators.required),
			type: new FormControl(undefined, Validators.required),
			genres: new FormControl(undefined, Validators.required),
			transaction: new FormControl(undefined, Validators.required),
			price: new FormControl(undefined),
			language: new FormControl(undefined, Validators.required),
			original: new FormControl(undefined, Validators.required),
			num_pages: new FormControl(undefined, Validators.required),
			comment: new FormControl(undefined),
			images: new FormControl(undefined)
		});
	}

	// Función para guardar el libro
	saveBook(){
		// Si la forma no es valida no se realiza la carga a firebase
		if( this.forma.invalid ){
			console.log('Formulario no valido');
			return;
		}
		
		// ponemos las imagenes dentro de la forma para luego subirlas
		this.forma.patchValue({
			images: this.urlImgs
		});

		// alojamos la forma en una constante de tipo BOOKS(interface) para
		// asegurarnos que todo esta correcto
		const book:Books = this.forma.value; 

		// Aquí se guarda el libro y tira mensajes informativos a la consola
		this._booksService.addData('books', book)
			.then( () => console.log("se guardo el libro") )
			.catch( (err) => console.log("error al guardar libros", err) );
	}


	// Carga las imagenes al storage de firebase
	uploadFile(event) {
		this.loader_img = true;
		console.log(this.loader_img);
		this.tamImgs = 0;
		const files = event.target.files;
		let url = []; // guarda las imagenes correctas para luego subirlas

		// Recorro el arreglo para ir subiendo las imagen 1 a 1
		for( let i=0; i<files.length; i++ ){
			// le damos .5s para que las imagenes se cargen sin incombenientes
			setTimeout( () => {
				const separatedFile = files[i].name.split('.');
				const extension = separatedFile[separatedFile.length - 1];
				
				// Tipos de archivo permitidos para las imagenes
				const typeValid = ['jpg', 'jpeg', 'png'];
	
				// Si el tipo de imagen corresponde a las especificadas, es válido
				if( typeValid.indexOf( extension ) >= 0 ){
					const filePath = files[i].name;
					
					const ref = this.storage.ref('images/'+ filePath);
					ref.put(files[i]);
					
					// obtenenmos la ruta de donde estara guardada
					// y lo alojamos en un array
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
		this.urlImgs = url; // pasamos las rutas al array global
		this.loader_img = false;
	 }

}

				