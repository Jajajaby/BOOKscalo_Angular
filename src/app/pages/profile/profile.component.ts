import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

// SERVICE
import { DatabaseService } from "../../services/database.service";

// ANGULARFIRE2
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

	profile_options:string = 'my_profile';
	profile:any;  
	user_profile: any;
	uid:string; // uid usuario actual
	form:FormGroup;
	preferences:any; 
	p_selected:any;
	preferences_modal:any;
	count_book:any;
	urlImgs:string; //  Guarda la ruta de la imagen para guardar en DB


  	constructor( private _dbService:DatabaseService ) {
			this.preferences_modal = {
				hour: '',
				day: '',
				subway_station: ''
			};

			let user = JSON.parse( localStorage.getItem( "user" ) );
				
			this._dbService.getDataQuery( "users", "uid", "==", user.uid )
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

			this._dbService.getDataQuery( "books", "uid", "==", user.uid )
				.valueChanges()
				.subscribe( data => this.count_book = data.length );
 	}

  	ngOnInit() {
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

		this.form = new FormGroup({
			subway_station: new FormControl(undefined, Validators.required),
			day: 						new FormControl(undefined, Validators.required),
			hour: 					new FormControl(undefined, Validators.required)
		});

		this.uid = JSON.parse(localStorage.getItem('user')).uid;

	}
	
	updateProfile(){
		// Actualiza la data según el id y el documento a modificar
		console.log(this.urlImgs);
		this.profile.img = this.urlImgs;

		this._dbService.updateData( "users", this.profile.key, this.profile )
			.then( () => {
				swal('Cambios guardados', 'Sus cambios han sidos guardados con éxito', 'success');
			})
			.catch( () => {
				swal('Error al editar', 'Por favor, vuelva a intentarlo', 'error');
			});
	}

	addPreference(){
		// Si la formulario no es valida no se realiza la carga a firebase
		if ( this.form.invalid ) {
			swal(
				'Debe completar el formulario', 
				'Debe ingresar todos los campos de este formulario',
				'warning'
			);
			return;
		}

		let pref:any = this.form.value; 

		if(this.profile.preferences === undefined ){
			this.profile.preferences = [pref];
		}else {
			this.profile.preferences.push(pref);
		}

		this._dbService.updateData( "users", this.profile.key, this.profile )
			.then( () => {
				console.log("funcionó");
			})
			.catch( () => {
				console.log("cuek");
			});
	}

	aaa(){
		console.log(this.form.value);
	}

	deleteAccount(){
		this.profile.status = false;
		this._dbService.updateData( "users", this.profile.key, this.profile )
			.then( () => {
				swal('Cuenta eliminada', 'Su cuenta ha sido eliminada con éxito', 'success');
			})
			.catch( () => {
				swal('Error al elminar su cuenta', 'Por favor, vuelva a intentarlo', 'error');
			});
	}

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


}
