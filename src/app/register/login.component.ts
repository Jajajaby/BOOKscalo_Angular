import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

// Services
import { DatabaseService } from '../services/database.service';

// Angularfire2
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

// Plugins
import swal from 'sweetalert';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./register.component.css']
})
export class LoginComponent implements OnInit {

	formulario:FormGroup;  
	public usuario:any = {};

	constructor( private afAuth: AngularFireAuth, 
					 private router:Router,
					 private _db:DatabaseService ) { 

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
		this.formulario = new FormGroup({
			email: 			new FormControl(localStorage.getItem('email') || undefined, [Validators.required, Validators.email]),
			password: 		new FormControl(undefined, [Validators.required,Validators.minLength(6)]),
			rememberMe: 	new FormControl(JSON.parse(localStorage.getItem('session')).rememberMe)
		});
	}

	loginGoogle() {		
		this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider() )
			.then( data => {
				console.log(data);
			})
			.catch( e => console.log('error', e));
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

					if( this.formulario.value['rememberMe'] ){
						localStorage.setItem('email', USER.email);
					}else {
						localStorage.removeItem('email');
					}

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
