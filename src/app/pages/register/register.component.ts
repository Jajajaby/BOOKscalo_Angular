import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

import { Users } from "../../interface/books.interface";
import { BooksService } from "../../services/books.service";

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

	// Para el formulario
	formulario:FormGroup;

	// Para que se muestre la primera página del registro
	register_pages:string = "page_1";

	constructor( 	private _booksService:BooksService,
					private afAuth: AngularFireAuth ) { }

	ngOnInit() {
		this.formulario = 	new FormGroup({
			name: 			new FormControl(undefined, Validators.required),
			last_name1: 	new FormControl(undefined, Validators.required),
			last_name2: 	new FormControl(undefined, Validators.required),
			rut: 			new FormControl(undefined, Validators.required),
			phone: 			new FormControl(undefined),
			commune: 		new FormControl(undefined),
			favs_genres: 	new FormControl(undefined, Validators.required),
			email: 			new FormControl(undefined, Validators.required),
			password: 		new FormControl(undefined, Validators.required),
			password2: 		new FormControl(undefined, Validators.required),
			conditions: 	new FormControl(false, Validators.required),
		});
	}


	// Para verificar que ambas constraseñas ingresadas sean iguales
	areEquals(input1:string, input2:string){
		return (group: FormGroup) => {
			let pass1 = group.controls[input1].value;
			let pass2 = group.controls[input2].value;

			if( pass1 === pass2 ){
				return null;
			}

			return {
				areEquals: true
			}
		}
	}

	saveUser(){
		if (this.formulario.valid) {
			let form=this.formulario.value;

			// Se guarda la formulario para validar
			const USER:Users = {
				rut: 			form.rut,
				name: 			form.name,
				last_name1: 	form.last_name1,
				last_name2: 	form.last_name2,
				email: 			form.email,
				favs_genres:	form.favs_genres,
				commune:		form.commune,
				phone: 			form.phone,
				ranking: 		0,
				uid:			""
			};

			this.afAuth.auth.createUserWithEmailAndPassword( form.email, form.password )
				.then( (resp:any) => {
				  	// Se guarda el usuario 
					this._booksService.addData('users', USER)
						.then( () => console.log("se guardó el usuario") )
						.catch( (err) => console.log("error al guardar al usuario", err) );
				})
				.catch( (err) => console.error('ERROR: Crear usuario en firebase', err) );
		}else{
			console.log("CUEEEEEK")
		}
	}
}
