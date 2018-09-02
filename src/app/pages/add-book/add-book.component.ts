import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
	
	nuevo:boolean = false;
	id:string;

	constructor( 	private _booksService:BooksService,
					private router:Router,
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
			title: new FormControl(null, Validators.required),
			author: new FormControl(null, Validators.required),
			editorial: new FormControl(null, Validators.required),
			type: new FormControl(null, Validators.required),
			genres: new FormControl(null, Validators.required),
			transaction: new FormControl(null, Validators.required),
			price: new FormControl(null),
			language: new FormControl(null, Validators.required),
			original: new FormControl(null, Validators.required),
			num_pages: new FormControl(null, Validators.required),
			comment: new FormControl(null)
			// image: new FormControl('', Validators.required)
		})

	}

	// Función para guardar el libro
	saveBook(){
		console.log(this.forma.valid);
		console.log("holas", this.forma.value );

		if( !this.forma.valid ){
			return;
		}

		// Aquí se guarda el libro y tira mensajes informativos a la consola
		this._booksService.addData('books', this.forma.value)
			.then( () => console.log("se guardo el libro") )
			.catch( (err) => console.log("error al guardar libros", err) );

		console.log(this.forma.value);
	}

	uploadFile(event) {
		const file = event.target.files[0];

		// Para separar la extensión del nombre del archivo
		const separatedFile = file.name.split('.');
		const extension = separatedFile[separatedFile.length - 1];

		// Tipos de archivo permitidos para las imagenes
		const typeValid = ['jpg', 'jpeg', 'png'];

		// Si el tipo de imagen corresponde a las especificadas, es válido
		if( typeValid.indexOf( extension ) >= 0 ){
			const filePath = file.name;

			// forma de generar el codigo (nombre)
			//let code = `name-email-${new Date().toString() }`;
			//'harrypotter-mati@mati.com-4232452' (ejemplo de como quedaria)
			
			const ref = this.storage.ref('images/'+ filePath);
			ref.put(file);
		// Si el tipo de imagen no corresponde a las especificadas, no es válido
		}else {
			console.log('Tipo de imagen no valido');
		}
	 }

}

				