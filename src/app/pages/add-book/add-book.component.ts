import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

// INTERFACE
import { Books } from "../../interface/books.interface";

// SERVICE
import { DatabaseService } from "../../services/database.service";
import { DateService } from 'src/app/services/date.service';

// ANGULARFIRE2
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase';

// SWEET ALERT
import swal from 'sweetalert';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent implements OnInit {

	form:FormGroup;
	urlImgs:any[]; // aquí se guardan las rutas de las imagenes para guardar en firebase
	uid:string; // uid del usuario
	today:any;

	constructor( 	private _dbService:DatabaseService,
					private _date:DateService,
					public router: Router ) { 			
	}

	ngOnInit() {
		this.form = new FormGroup({
			title: 			new FormControl(undefined, Validators.required),
			author: 		new FormControl(undefined, Validators.required),
			editorial: 		new FormControl(undefined, Validators.required),
			type: 			new FormControl(undefined, Validators.required),
			genres: 		new FormControl(undefined, Validators.required),
			transaction: 	new FormControl(undefined, Validators.required),
			price: 			new FormControl(undefined),
			language: 		new FormControl(undefined, Validators.required),
			original: 		new FormControl(undefined, Validators.required),
			num_page: 		new FormControl(undefined, Validators.required),
			comment: 		new FormControl(undefined),
			images: 		new FormControl(undefined),
			date: 			new FormControl(this._date.actual_date())
		});
		console.log(this._date.actual_date());
		this.uid = JSON.parse(localStorage.getItem('user')).uid;
	}

	// Función para guardar el libro
	saveBook(){
		// Si el formulario no es valido no se realiza la carga a firebase
		console.log(this.form.value);
		if( this.form.invalid ){
			swal(
				'Debe completar el formulario', 
				'Debe ingresar todos los campos de este formulario',
				'warning'
			);
			return;
		}
		
		// Se ponen las imagenes en la formulario para luego subirlas
		this.form.patchValue({
			images: this.urlImgs
		});

		// Se guarda el formulario para validar
		let book:Books = this.form.value; 

		// Para agregar la referencia al usuario propietario del libro
		let user = JSON.parse( localStorage.getItem( "user" ));
		book.user = this._dbService.afs.collection('users').doc(user.uid).ref;

		// Para que el id de Firebase sea el uid + fechahora 
		book.id = user.uid + "-" + new Date().valueOf() ;
		book.uid = user.uid;

		// Se guarda el libro 
		this._dbService.addData('books', book)
			.then( () => {
				console.log("se guardó el libro"); 
				swal('Libro registrado con éxito', book.title, 'success');
				this.router.navigate([ '/home' ]);
			})
			.catch( (err) => {
				console.log("error al guardar libros", err) 
				swal("Error", "No se ha podido guardar el nuevo libro", "warning");
			});
	}


	// Carga las imagenes al storage de Firebase
	uploadFile(event) {
		let files = event.target.files;
		let url = []; // guarda las imagenes correctas para luego subirlas
		let aux = false; // para que no se cargen imagenes si existe aunque sea 1 mala

		for( let i=0; i<files.length; i++ ){
			const separatedFile = files[i].name.split('.');
			const extension = separatedFile[separatedFile.length - 1];
				
			// Tipos de archivo válidos para las imagenes
			const typeValid = ['jpg', 'jpeg', 'png'];

			// si las imagenes no son validas se termina el proceso
			if( typeValid.indexOf( extension ) <= -1 ){
				swal(
					'Error al ingresar imagen',
					'Extensiones validas [png, jpg, jpeg], vuelva a intentarlo',
					'error'
				);
				aux = true;
				return;
			}
		}

		if( !aux ){
			const storageRef = firebase.storage().ref();
			let upload = false;
			for(let i=0; i<files.length; i++){
				
				let filePath = `${this.uid}-${new Date().valueOf()}`; 
					 
				const uploadTask:firebase.storage.UploadTask = 
					storageRef.child(`images/${ filePath }`)
					.put(files[i])

				uploadTask.on('state_changed',
					() => {}, // Manejo de carga
					(error) => { // Manejo de errores
						console.log('Error al cargar imagen' ,error);
				  		swal('Error al cargar imagenes', 'Por favor, vueva a intentarlo', 'error');
					}, 
					() => { // todo salio bien
					   uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
							url.push( downloadURL );
							if(i === files.length-1) {
								console.log("Imagenes cargadas");
								swal('Éxito', 'Imagenes cargadas con exito', 'success');
							}
				  		});
					}
				);
			}
			this.urlImgs = url;
		}
	}
}

				