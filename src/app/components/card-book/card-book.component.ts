import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// INTERFACE
import { Books, Predet_Message, Users } from '../../interface/books.interface';

// SERVICIOS
import { DatabaseService } from '../../services/database.service';
import { DateService } from '../../services/date.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html'
})
export class CardBookComponent implements OnInit {

	@Input() type:string; // el tipo que se mostrara en pantalla
	@Input() booksHome:any[]; // Trae los books desde el home
	
	books:any[]; // array con los books a mostrar
	loading:boolean = true; // muestra y esconde un loading
	form:any; 
	actual_user:any;
	today:any;
	
	book_modal: Books = {
		author: 		'', 
		title: 			'', 
		editorial: 		'', 
		type: 			'', 
		genres: 		[], 
		language: 		'', 
		num_page: 		0,
		original: 		false, 
		transaction:	'', 	
		user: 			'', 
		id: 			'', 
		comment: 		'', 
		price: 			0, 
		images: 		[],
		date: 			''
	};

	constructor(	private _date:DateService,
					private _dbService:DatabaseService) {
		this.actual_user = JSON.parse(localStorage.getItem('user'));
		console.log(this.actual_user);
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

		this.form = new FormGroup({
			text: 			new FormControl(undefined, Validators.required),
			transaction: 	new FormControl(undefined, Validators.required),
			pref: 			new FormControl(undefined, Validators.required),
			new_preference: new FormControl(''),
			station: 		new FormControl(''),
			hour: 			new FormControl(''),
			day: 			new FormControl(''),
			new_price:		new FormControl(0),
			new_text:		new FormControl(''),
		})
	 }

	sendMessage(){
		let predet_Message:Predet_Message = {
			transaction:		this.form.value.transaction,
			pref: 				this.form.value.pref,
			text:				this.form.value.text,
			date:				this._date.actual_date(),
			book:				this.book_modal,
			user_owner:			this.book_modal.user.uid,
			uid_interested:		this.actual_user,
			status:				false,
			price:				this.book_modal.price
		}

		// Si no le acomoda la preferencia horaria
		if ( this.form.value.pref === 'dislike_preferences' ){
			let new_preferences:any =  {
				station: 	this.form.value.station,
				day: 		this.form.value.day, 
				hour: 		this.form.value.hour, 
			};
			predet_Message.pref = new_preferences;
		}

		// Si no le acomoda el precio
		if ( this.form.value.text === 'dislike-price' ){
			predet_Message.price = this.form.value.price;
		}

		// Si no le acomoda el mensaje predeterminado
		if ( this.form.value.text === 'new_text' ){
			predet_Message.text = this.form.value.new_text
		}

		console.log(this.form.valid);
		console.log(this.form.value);
		console.log(predet_Message);

		this._dbService.addData('messages-transaction', predet_Message)
			.then( () => swal('Mensaje enviado', 'Su mensaje ha sido enviado con éxito', 'success') )
			.catch( () => swal('Error', 'Su mensaje no ha podido enviarse, vuelva a intentarlo', 'error') );
	}

}
