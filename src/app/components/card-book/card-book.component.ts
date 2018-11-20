import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// INTERFACE
import { Books, Message, Users, Report } from '../../interface/books.interface';

// SERVICIOS
import { DatabaseService } from '../../services/database.service';
import { DateService } from '../../services/date.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent implements OnInit {

	// Input desde el Home, traen el elemento a mostrar
	@Input() type:string; 
	@Input() booksHome:any[]; 

	books:any[]; // array con los books a mostrar
	loading:boolean = true; // muestra y esconde un loading
	form:any; 
	actual_user:any;
	today:any;

	book_modal: Books = {
		author: 			'', 
		title: 				'', 
		editorial: 		'', 
		type: 				'', 
		categories: 	[], 
		language: 		'', 
		num_page: 		0,
		original: 		false, 
		transaction:	'', 	
		user: 				'', 
		id: 					'', 
		comment: 			'', 
		price: 				0, 
		images: 			[],
		date: 				''
	};

	constructor(	private _date:DateService,
								private _dbService:DatabaseService) {
		this.actual_user = JSON.parse(localStorage.getItem('user'));
	}

	ngOnInit() {
		setTimeout( () => { 
			if( this.type === 'all' ){
				this.loading = false;
				this.books = this.booksHome;
			}else {
				let aux = [];

				for(let book of this.booksHome){
					if( book.transaction ===  this.type ) aux.push(book);
				}
				this.loading = false;
				this.books = aux;
			}
		}, 2000);

		this.form = 				new FormGroup({
			text: 						new FormControl([], Validators.required),
			transaction: 			new FormControl(undefined, Validators.required),
			pref: 						new FormControl(undefined, Validators.required),
			station: 					new FormControl(undefined),
			hour: 						new FormControl(undefined),
			day: 							new FormControl(undefined),
			new_price:				new FormControl(0),
			new_text:					new FormControl([], Validators.required),
		})

	 }

	// Envía el mensaje desde el usuario actual hacia el usuario dueño del libro
	sendMessage(){
		console.log(this.form.value);
		console.log(this.form.valid);
		let predet_Message:Message = {
			transaction:								this.form.value.transaction,
			pref: 											this.form.value.pref,
			text:									[{ 
				[this.actual_user.uid]: 	this.form.value.text, 
				date: 										this._date.actual_date()
			}],
			date:												this._date.actual_date(),
			book:												this.book_modal,
			user_owner:									this.book_modal.user.uid,
			uid_interested:							this.actual_user,
			status:											false,
			price:											this.book_modal.price
		}

		if(predet_Message.pref === null ){
			return swal('Error al enviar un mensaje', 'Debe completar todos los campos', 'error');
		}
	

		if ( this.form.value.transaction == undefined || this.form.value.transaction === null){
			predet_Message.transaction = this.book_modal.transaction;
		}

		if ( this.form.value.pref === 'dislike_preferences' ){
			let new_preferences = this.form.value.station + ' - ' + this.form.value.day + ' - ' + this.form.value.hour;
			predet_Message.pref = new_preferences;
		}

		if ( this.form.value.text === 'dislike-price' ){
			predet_Message.price = this.form.value.price;
		}

		if ( this.form.value.text === 'new_text' ){
			predet_Message.text = [{
				[this.actual_user.uid]: this.form.value.new_text,
				date:										this._date.actual_date()
			}
			];
		}

		// Envía el mensaje a la DB.
		this._dbService.addData('messages-transaction', predet_Message)
			.then( () => swal('Mensaje enviado', 'Su mensaje ha sido enviado con éxito', 'success') )
			.catch( () => swal('Error', 'Su mensaje no ha podido enviarse, vuelva a intentarlo', 'error') );
	}
	
	// Envía el mensaje de reporte del usuario al admin
	reportUser( book_m:any ){

		let report:Report = {
			id: 						this.actual_user.uid + "-" + new Date().valueOf(),
			day: 						this._date.actual_day(),
			hour: 					this._date.actual_hour(),
			user: 					this.actual_user,
			user_reported: 	book_m.user,
			type: 					"Reporte de usuario",
			status:					"No revisado"
		}
		console.log(report);	
		// Envía el mensaje a la DB.
		this._dbService.addData('reports', report)
			.then( () => swal('Reporte enviado', 'Muchas gracias por reportar, lo revisaremos en seguida', 'success') )
			.catch( () => swal('Error', 'Su reporte no ha podido enviarse', 'error') );
	}

	// Envía el mensaje de reporte de imagen al admin
	reportImage( book_m:any ){

		let report:Report = {
			id: 					this.actual_user.uid + "-" + new Date().valueOf(),
			day: 					this._date.actual_day(),
			hour: 				this._date.actual_hour(),
			user: 				this.actual_user,
			img: 					book_m.images,
			type: 				"Reporte de imagen",
			status: 			"No revisado"
		}
		console.log(report);	
		// Envía el mensaje a la DB.
		this._dbService.addData('reports', report)
			.then( () => swal('Reporte enviado', 'Muchas gracias por reportar, lo revisaremos en seguida', 'success') )
			.catch( () => swal('Error', 'Su reporte no ha podido enviarse', 'error') );
	}

}
