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

	// Input desde el Home, traen el elemento a mostrar
	@Input() type:string; 
	@Input() booksHome:any[]; 

	// Input desde el Search, traen el elemento a mostrar
	// @Input() booksSearch:any[];
	// @Input() authorsSearch:any[];
	// @Input() categoriesSearch:any[];
	// @Input() name:string;
	// @Input() author:string;


	books:any[]; // array con los books a mostrar
	loading:boolean = true; // muestra y esconde un loading
	form:any; 
	actual_user:any;
	today:any;

	// FIXME: Hacer que eso funcione, no sé dónde
	count_book:number;
	// this._dbService.getDataQuery( "books", "uid", "==", this.book_modal.user.uid )
	// .valueChanges()
	// .subscribe( data => this.count_book = data.length );
	
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
				// this.count_book = this.booksHome.length;
			}else {
				let aux = [];

				for(let book of this.booksHome){
					if( book.transaction ===  this.type ) aux.push(book);
				}
				this.loading = false;
				this.books = aux;
				// this.count_book = aux.length;
			}
		}, 2000);

		// setTimeout(() => {
				// let aux = [];
				// for(let book of this.booksSearch){
				// 	if( book.name ===  this.name ) aux.push(book);
				// }
				// this.loading = false;
				// this.books = aux;
		// }, 2000);

		

		this.form = 				new FormGroup({
			text: 						new FormControl([], Validators.required),
			transaction: 			new FormControl(undefined, Validators.required),
			pref: 						new FormControl(undefined, Validators.required),
			new_preference: 	new FormControl(''),
			station: 					new FormControl(''),
			hour: 						new FormControl(''),
			day: 							new FormControl(''),
			new_price:				new FormControl(0),
			new_text:					new FormControl(''),
		})
	 }

	// Envía el mensaje desde el usuario actual hacia el usuario dueño del libro
	sendMessage(){
		let predet_Message:Predet_Message = {
			transaction:			this.form.value.transaction,
			pref: 						this.form.value.pref,
			text:							[{ [this.actual_user.uid]: this.form.value.text }],
			date:							this._date.actual_date(),
			book:							this.book_modal,
			user_owner:				this.book_modal.user.uid,
			uid_interested:		this.actual_user,
			status:						false,
			price:						this.book_modal.price
		}

		if ( this.form.value.transaction == undefined || this.form.value.transaction === null){
			predet_Message.transaction = this.book_modal.transaction;
		}

		if ( this.form.value.pref === 'dislike_preferences' ){
			let new_preferences:any =  {
				station: 	this.form.value.station,
				day: 			this.form.value.day, 
				hour: 		this.form.value.hour, 
			};
			predet_Message.pref = new_preferences;
		}

		if ( this.form.value.text === 'dislike-price' ){
			predet_Message.price = this.form.value.price;
		}

		if ( this.form.value.text === 'new_text' ){
			predet_Message.text = this.form.value.new_text
		}

		// Envía el mensaje a la DB.
		this._dbService.addData('messages-transaction', predet_Message)
			.then( () => swal('Mensaje enviado', 'Su mensaje ha sido enviado con éxito', 'success') )
			.catch( () => swal('Error', 'Su mensaje no ha podido enviarse, vuelva a intentarlo', 'error') );
	}

}
