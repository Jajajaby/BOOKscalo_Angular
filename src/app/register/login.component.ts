import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

import { Users } from "../interface/books.interface";
import { BooksService } from "../services/books.service";

import { AngularFireAuth } from 'angularfire2/auth';
// import firebase from 'firebase/app';
import { auth } from 'firebase';

// Google API
declare const gapi:any;

// Sweet Alert
import swal from 'sweetalert';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./register.component.css']
})
export class LoginComponent implements OnInit {

	// Para el formulario
	formulario:FormGroup;  

	// Para el "Recuerdame" en localStorage
	email:string;  
	rememberMe:boolean = false;

	// Objeto para iniciar sesión con Google API
	auth2:any;

	// var provider = new firebase.auth.GoogleAuthProvider();

	constructor( private afAuth: AngularFireAuth, 
				 private router:Router ) { }

	ngOnInit() {
		this.googleInit();

		this.formulario = 	new FormGroup({
			email: 			new FormControl(undefined, [Validators.required, Validators.email]),
			password: 		new FormControl(undefined, [Validators.required,Validators.minLength(6)]),
			rememberMe: 	new FormControl(false)
		});

		// Si existe un email en el localStorage, que se guarde en email
		this.email = localStorage.getItem('email') || '';

		// Si hay un correo en el campo, el check de "Recuérdame" persiste
		if( this.email.length > 1 ){
	      this.rememberMe = true;
	    }
	}

	// Inicialización de API de Google
	googleInit(){
		gapi.load('auth2', () => {
			this.auth2 = gapi.auth2.init({
				client_id: '748589695279-mt7l161vm35ca3d9ftbgqoe7au5in0da.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
				scope: 'profile email'
			});
			this.attachSignIn( document.getElementById('btnGoogle'));
		});
	}

	attachSignIn( element ){
		this.auth2.attachClickHandler( element, {}, (googleUser)=> {
			// let profile = googleUser.getBasicProfile();
			let token = googleUser.getAuthResponse().id_token;
			console.log( token );
		})
	}

	login() {
    	this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  	}


	loginUser(){
		if( this.formulario.valid ){
			this.afAuth.auth.signInWithEmailAndPassword(this.formulario.value['email'], this.formulario.value['password'])
				.then( (resp) => {
					const USER = resp.user;

					let userStorage = {
						uid: USER.uid,
						email: USER.email
					};

					localStorage.setItem('user', JSON.stringify(userStorage));
					localStorage.setItem('session', JSON.stringify({
						rememberMe: this.formulario.value['rememberMe'],
						session: true
					}));
					
					this.router.navigate(['/home']);
				})
				.catch()
		}
	}

}
