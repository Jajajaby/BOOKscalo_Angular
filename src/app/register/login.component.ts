import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

// SERVICES
import { DatabaseService } from '../services/database.service';

// ANGULARFIRE2
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

// PLUGINS
import swal from 'sweetalert';
import * as firebase from 'firebase';

// Inicializa los plugins
declare function init_plugins();

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./register.component.css']
})
export class LoginComponent implements OnInit {

	form:FormGroup;  
	public user:any = {};

	constructor( 	private afAuth: AngularFireAuth, 
					private router:Router,
					private _db:DatabaseService ) { 

		this.afAuth.authState.subscribe( user => {
			console.log( 'Estado del usuario', user );
			if( !user ){
				return;
			}
			this.user.name = user.displayName;
			this.user.uid 	= user.uid;
			this.user.email 	= user.email;
		});
	}

	ngOnInit() {
		init_plugins();
		this.form = new FormGroup({
			email: 				new FormControl(localStorage.getItem('email') || undefined, [Validators.required, Validators.email]),
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
		if( this.form.valid ){
			this.afAuth.auth.signInWithEmailAndPassword(this.form.value['email'], this.form.value['password'])
				.then( (resp) => {
					const USER = resp.user;

					this._db.getDataQuery('users', 'uid', '==', USER.uid)
						.valueChanges()
						.subscribe( resp => {
							if (!resp[0].status){
								this.afAuth.auth.signOut();
								swal('Su cuenta no se encuentra activa', 'Si desea activar su cuenta comunicarse con la administradora al siguiente email: JavieraOrmeno.L@gmail.com', 'warning');
							}else{
								let userStorage = {
									uid: 					USER.uid,
									email: 				USER.email,
									name: 				resp[0].name,
									last_name1:		resp[0].last_name1,
									last_name2: 	resp[0].last_name2,
									role: 				resp[0].role,
									img: 					resp[0].img
								};
			
								if( this.form.value['rememberMe'] ){
									localStorage.setItem('email', USER.email);
								}else {
									localStorage.removeItem('email');
								}
			
								localStorage.setItem('user', JSON.stringify(userStorage));
								localStorage.setItem('session', JSON.stringify({
									rememberMe: this.form.value['rememberMe'],
									session: true
								}));

								// Redirige a dashboard o home según el rol del usuario
								if ( userStorage.role == 'admin' ){
									this.router.navigate(['/admin']);
								}else if ( userStorage.role == 'normal' ){
									this.router.navigate(['/home']);
								}
							}
						});
				})
				.catch( () => console.log('error') )
		}
	}

	// Envía un correo desde Firebase para restaurar la contraseña
	forgotPassword(){
		let auth = firebase.auth();

		auth.sendPasswordResetEmail(this.form.value['email'])
			.then(() => {
				swal('Correo enviado', 'Se ha enviado un correo para restaurar la contraseña', 'success');
			})
			.catch( () => {
				swal('Error al enviar correo', 'Por favor, vuelva a intentarlo', 'error');
			});
	}
}
