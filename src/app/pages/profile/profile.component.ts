import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

// SERVICE
import { DatabaseService } from "../../services/database.service";

import { Users } from '../../interface/books.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

	profile_options:string = 'my_profile';
	profile:any;  
	user_profile: any;
	form:FormGroup; 

  	constructor( private _dbService:DatabaseService ) {
		let user = JSON.parse( localStorage.getItem( "user" ) );
		  
		this._dbService.getDataQuery( "users", "uid", "==", user.uid)
			.snapshotChanges()
			.pipe(
				map(actions => actions.map(a => {
					const data = a.payload.doc.data();
					const key = a.payload.doc.id;
					return { key, ...data };
				}))
			).subscribe( data => {
				this.profile = data[0];
				console.log(this.profile);
			});
 	}

  	ngOnInit() {
  		this.profile = {
			uid: 			'', 
			rut: 			'', 
			name: 			'', 
			last_name1: 	'', 
			last_name2: 	'', 
			email: 			[], 
			phone: 			'', 
			ranking: 		0,
			favs_genres:	[], 
			commune: 		''
		};

		this.form = new FormGroup({
			subway_station: new FormControl(undefined, Validators.required),
			day: 			new FormControl(undefined, Validators.required),
			hour: 			new FormControl(undefined, Validators.required)
		});
	}
	
	updateProfile(){
		// Actualiza la data según el id y el documento a modificar
		this._dbService.updateData( "users", this.profile.key, this.profile )
			.then( () => {
				swal('Cambios guardados', 'Sus cambios han sidos guardados con éxito', 'success');
			})
			.catch( () => {
				swal('Error al editar', 'Por favor, vuelva a intentarlo', 'error');
			});
	}

	newPreference(){

		if(this.profile.preferences === undefined ){
			this.profile.preferences = ['agregar la preferencia'];
		}else {
			this.profile.preferences.push('una preferencia');
		}

		// agregar
		// update(this.profile);

		console.log(this.profile);
		let user: Users;


	}

	deleteAccount(){

	}

	addPreferences(){
		
	}
}
