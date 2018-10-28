import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { Users } from "../interface/books.interface";
import { DatabaseService } from "../services/database.service";

import { AngularFireAuth } from 'angularfire2/auth';

// Sweet Alert
import swal from 'sweetalert';

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

	categories:Array<string>=["Antiguedades y Coleccionables", "Arquitectura", "Arte", "Artes Escénicas", "Biografía y Autobiografía", "Casa y Hogar", "Ciencia", "Ciencias Políticas", "Ciencias Sociales", "Cocina", "Comida y Bebestibles", "Colecciones Literarias", "Cómics y Novelas Gráficas", "Computación e Internet", "Crímenes", "Crítica Literaria", "Cuerpo", "Mente y Espíritu", "Deportes y Recreación", "Drama", "Educación", "Estudio de Lenguas Extranjeras", "Ensayos Académicos", "Familia y Relaciones", "Ficción", "Ficción Adolescente", "Ficción para Niños", "Filosofía", "Fotografía", "Historia y Geografía", "Humor", "Jardinería", "Juegos", "Lectura escolar", "Lengua y Literatura", "Leyes", "Manualidades y Hobbies", "Mascotas y Animales", "Matemáticas", "Medicina", "Música", "Naturaleza y Aire libre", "Negocios y Economía", "Niños y Jóvenes", "Papelería", "Poesía", "Psicología", "Religión y Espiritualidad", "Salud y Bienestar", "Tecnología", "Transporte", "Viajes"];

	constructor( 	private _dbService:DatabaseService,
					private afAuth: AngularFireAuth,
					public router: Router ) { }

	// TODO: Falta agregar ROLE: USER o ADMIN

	ngOnInit() {
		this.formulario = 	new FormGroup({
			name: 			new FormControl(undefined, Validators.required),
			last_name1: 	new FormControl(undefined, Validators.required),
			last_name2: 	new FormControl(undefined, Validators.required),
			rut: 			new FormControl(undefined, Validators.required),
			phone: 			new FormControl(undefined),
			favs_genres: 	new FormControl(undefined, Validators.required),
			email: 			new FormControl(undefined, Validators.required),
			password: 		new FormControl(undefined, Validators.required),
			password2: 		new FormControl(undefined, Validators.required),
			conditions: 	new FormControl(false, Validators.required),
		}, { validators: this.areEquals( 'password', 'password2') });
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

			this.afAuth.auth.createUserWithEmailAndPassword( form.email, form.password )
				.then( (resp:any) => {

					// Se guarda la formulario para validar
					const USER:Users = {
						uid: 			resp.user.uid,
						rut: 			form.rut,
						name: 			form.name.toLowerCase(),
						last_name1: 	form.last_name1.toLowerCase(),
						last_name2: 	form.last_name2.toLowerCase(),
						email: 			form.email.toLowerCase(),
						favs_genres:	form.favs_genres,
						phone: 			form.phone,
						ranking: 		0,
						google:        	false
					};

					if( !this.formulario.value.conditions ){
						swal("Importante", "Debe aceptar los términos y condiciones", "warning");
						return;
					}

					// Se guarda el usuario
					this._dbService.addDataIdCustom('users', USER.uid, USER)
						.then( () => {
							console.log("Se guardó el usuario");
							swal('Cuenta creada con éxito', USER.email, 'success');
							this.afAuth.auth.signOut();
							this.router.navigate([ '/login' ]);
						})
					.catch( (err) => {
						console.log("Error al guardar al usuario", err);
						swal("Error", "No se ha podido guardar el nuevo usuario", "warning");
					})
				})
				.catch( (err) => console.error('ERROR: Crear usuario en firebase', err) );
		}else{
			console.log("No funcionó")
		}
	}
}
