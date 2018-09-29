import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

import { Users } from "../interface/books.interface";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';

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

	// 
	public usuario:any = {};

	constructor( private afAuth: AngularFireAuth, 
				 private router:Router ) { 

			this.afAuth.authState.subscribe( user => {
	
			console.log( 'Estado del usuario', user );
	
			if( !user ){
				return;
			}
			
			this.usuario.nombre = user.displayName;
			this.usuario.uid 	= user.uid;
			this.usuario.email 	= user.email;
		});

	}

	ngOnInit() {
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

	login() {
    	this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
	}
	
	logout() {
		this.afAuth.auth.signOut();
		this.router.navigate(['/login']);
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
