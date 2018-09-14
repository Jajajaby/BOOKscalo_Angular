import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

import { Users } from "../interface/books.interface";
import { BooksService } from "../services/books.service";

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./register.component.css']
})
export class LoginComponent implements OnInit {

	// Para el formulario
	formulario:FormGroup;    

	constructor( private afAuth: AngularFireAuth, 
				 private router:Router ) { }

	ngOnInit() {
		this.formulario = new FormGroup({
			email: 		new FormControl(undefined, [Validators.required, Validators.email]),
			password: 	new FormControl(undefined, [Validators.required,Validators.minLength(6)]),
			rememberMe: new FormControl(false)
		});
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
