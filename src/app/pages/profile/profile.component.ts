import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

// SERVICE
import { DatabaseService } from "../../services/database.service";

// ANGULARFIRE2
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
	
	form:FormGroup;
	profile_options:string; // Controla las opciones en Mi Perfil
	profile:any;  
	user_profile: any;
	uid:string; // uid usuario actual
	count_book:any; // Contador de libros del usuario actual
	preferences_modal:any;
	preferences:any; // Todas las preferencais 
	p_selected:any; // Preferencias seleccionadas
	urlImgs:string; // Guarda la ruta de la imagen para guardar en DB


	constructor( private _dbService:DatabaseService, 
							 private auth:AngularFireAuth,
							 private router: Router,
							 private acRoute:ActivatedRoute ) {

		this.acRoute.params.subscribe( params => {
			const input:string = params['input'];
			
			if( input === 'preferences' ) this.profile_options = 'preference_profile';
			else this.profile_options = 'my_profile';
	
			this.preferences_modal = {
				hour: '',
				day: '',
				subway_station: ''
			};
	
			let actual_user = JSON.parse( localStorage.getItem( "user" ) );
				
			this._dbService.getDataQuery( "users", "uid", "==", actual_user.uid )
				.snapshotChanges()
				.pipe(
					map(actions => actions.map(a => {
						const data = a.payload.doc.data();
						const key = a.payload.doc.id;
						return { key, ...data };
					}))
				).subscribe( data => {
					this.profile = data[0];
					this.preferences =  this.profile.preferences;
				});
	
			this._dbService.getDataQuery("books", "uid", "==", actual_user.uid)
				.valueChanges()
				.subscribe( data => this.count_book = data.length );
		});
	}

  ngOnInit() {
  	this.resetUser();

		this.form = new FormGroup({
			subway_station: new FormControl(undefined, Validators.required),
			day: 						new FormControl(undefined, Validators.required),
			hour: 					new FormControl(undefined, Validators.required)
		});

		this.uid = JSON.parse(localStorage.getItem('user')).uid;
	}
	
	// Actualiza los datos de perfil del usuario en la DB
	updateProfile(){
		this.profile.img = this.urlImgs;

		this._dbService.updateData( "users", this.profile.key, this.profile )
			.then( () => {
				swal('Cambios guardados', 'Sus cambios han sidos guardados con éxito', 'success');
			})
			.catch( () => {
				swal('Error al editar', 'Por favor, vuelva a intentarlo', 'error');
			});
	}

	// TODO: Falta revisar si la nueva preferencia ya existe.
	// Agrega la nueva preferencia a la DB 
	addPreference(){
		if ( this.form.invalid ) {
			swal(
				'Debe completar el formulario', 
				'Debe ingresar todos los campos de este formulario',
				'warning'
			);
			return;
		}

		let pref:any = this.form.value; // Asigna la nueva preferencia a la variable a actualizar

		if(this.profile.preferences === undefined ){
			this.profile.preferences = [pref];
		}else {
			this.profile.preferences.push(pref);
		}

		this._dbService.updateData( "users", this.profile.key, this.profile )
			.then( () => {
				swal('Preferencia agregada', 'Su preferencia ha sido agregada con éxito', 'success');
			})
			.catch( () => {
				swal('Error al agregar su preferencia', 'Por favor, vuelva a intentarlo', 'error');
			});
	}
 
	// Invalida la cuenta del usuario, no la borra, solo le cambia el estado
	deleteAccount(){
		this.profile.status = false;
		swal({
			title: "Está seguro que desea eliminar su cuenta?",
			text: "Si luego desea volver a restaurar su cuenta, debe enviar un correo a JavieraOrmeno.L@gmail.com",
			icon: "warning",
			buttons: ['Cancelar', 'Confirmar'],
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {
				this.profile.status = false;

				this._dbService.updateData( "users", this.profile.key, this.profile )
					.then( () => {
						this._dbService.getDataQuery('books', 'uid', '==', this.profile.uid)
							.snapshotChanges()
							.pipe(
								map( actions => actions.map( a => {
									const data = a.payload.doc.data();
										const key = a.payload.doc.id;
										return { key, ...data };
								}))
							)
							.subscribe( books => {
								for(let book of books) {
									book.status = 'removed';
									this._dbService.updateData('books', book.key, book);
								}

								swal("Su cuenta ha sido eliminada con éxito", {
									icon: "success",
								})
								.then( () => this.auth.auth.signOut() )
								.then( () => this.router.navigate(['/login']));
							});
					})
					.catch( () => {
						swal('Error al eliminar su cuenta', 'Por favor, vuelva a intentarlo', 'error');
					});
				} else {
					swal("Su cuenta sigue activa", 'error');
				}
		});
	}

	// Elimina la preferencia seleccionada del usuario
	deletePreference(index:number){
		this.profile.preferences.splice(index, 1);
		this._dbService.updateData( "users", this.profile.key, this.profile )
			.then( () => {
				swal('Preferencia eliminada', 'La preferencia seleccionada ha sido eliminada con éxito', 'success');
			})
			.catch( () => {
				swal('Error al eliminar', 'Por favor, vuelva a intentarlo', 'error');
			});
	}

	// Carga las imagenes al storage de Firebase
	uploadFile(event) {
		let file = event.target.files;
		let url:string; // guarda las imagenes correctas para luego subirlas
		let aux = false; // para que no se cargen imagenes si existe aunque sea 1 mala

		const separatedFile = file[0].name.split('.');
		const extension = separatedFile[separatedFile.length - 1];
				
		const typeValid = ['jpg', 'jpeg', 'png'];

		// Valida las extensiones de las imagenes
		if( typeValid.indexOf( extension ) <= -1){
			swal(
				'Error al ingresar imagen',
				'Extensiones válidas (png, jpg, jpeg), vuelva a intentarlo',
				'error'
			);
			aux = true;
			return;
		}

		if( !aux ){
			const storageRef = firebase.storage().ref();
			let filePath = this.uid; 
					 
			const uploadTask:firebase.storage.UploadTask = 
			storageRef.child(`profile_img/${ filePath }`)
			.put(file[0])
			
			uploadTask.on('state_changed', 
				() => {}, // Manejo de carga
				(error) => { // Manejo de errores
					console.log('Error al cargar imagen' ,error);
			  	swal('Error al cargar imagenes', 'Por favor, vueva a intentarlo', 'error');
				}, 
				() => { // Éxito
				  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					url = downloadURL;
					console.log("Imagenes cargadas");
					swal('Éxito', 'Imagenes cargadas con exito', 'success');
					this.urlImgs = url;
		  		});
				}
			);
		}
	}

	// Deja los campos de usuario en blanco
	resetUser(){
		this.profile = {
			uid: 					'', 
			rut: 					'', 
			name: 				'', 
			last_name1: 	'', 
			last_name2: 	'', 
			email: 				[], 
			phone: 				'', 
			categories:		[], 
			commune: 			'',
			status:				true,
			img: 					''
		};
	}

}
