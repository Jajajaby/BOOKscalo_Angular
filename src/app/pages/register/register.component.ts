import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

	// Para el formulario
	formulario:FormGroup;

	constructor() { }

	ngOnInit() {
		this.formulario = new FormGroup({
			name: 		new FormControl(undefined, Validators.required),
			last_name1: new FormControl(undefined, Validators.required),
			last_name2: new FormControl(undefined, Validators.required),
			rut: 		new FormControl(undefined, Validators.required),
			phone: 		new FormControl(undefined, Validators.required),
			commune: 	new FormControl(undefined, Validators.required),
			favs_genre: new FormControl(undefined, Validators.required),
			email: 		new FormControl(undefined, Validators.required),
			pass: 		new FormControl(undefined, Validators.required),
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

}
