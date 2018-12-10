import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

// SERVICES
import { DatabaseService } from '../../services/database.service';
import { DateService } from '../../services/date.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	actual_user:any;
	actual_date:any;
	actual_day:any;

	// Data de la DB
	users:any;
	reports:any[];
	reportsData:any[];
	tasks:any;

	// Cantidad de 
	count_users:number;
	count_books:number;
	count_messages:number;

	// Inputs
	date:string;

	form:FormGroup;

	constructor( 	private _dbService:DatabaseService,
								private _date:DateService ) {
		this.actual_user = JSON.parse( localStorage.getItem( "user" ) );
		this.actual_date = this._date.actual_date();
		this.actual_day = this._date.actual_day();

		this._dbService.getData( "users")
			.valueChanges()
			.subscribe( (data:any) => {
				this.users = data;
				this.count_users = data.length;
			});
			
		this._dbService.getData( "books")
			.valueChanges()
			.subscribe( data => this.count_books = data.length );
			
		this._dbService.getData( "messages-transaction")
			.valueChanges()
			.subscribe( data => this.count_messages = data.length );

		this._dbService.getData( "reports")
			.valueChanges()
			.subscribe( data => {
				this.reports = data;
				this.reportsData = this.reports;
			});

		// this._dbService.getData( "tasks")
		// 	.valueChanges()
		// 	.subscribe( data => this.tasks = data );
	}

	ngOnInit() {
		this.form = new FormGroup({
			task:         new FormControl(undefined, Validators.required),
			description:  new FormControl(undefined, Validators.required),
			priority:     new FormControl(undefined, Validators.required) //high, medium, low
		});
	}
	
	searchReportDate(date){
		this.reports = [];
		if( date === 'all' ){
			this.reports = this.reportsData;
		}else {
			for(let r of this.reportsData) {
				if( r.day === date ) this.reports.push(r);
			}
		}
	}
	
	// FIXME: Probar
	changeState(user:any){
		user.status = ! user.status;

		this._dbService.updateData( "users", user.key, user )
			.then( () => {
				swal('Éxito', 'Se ha cambiado el estado del usuario', 'success');
			})
			.catch( () => {
				swal('Error', 'Por favor, vuelva a intentarlo', 'error');
			});
		
		
	}
	
	// addTask(){
	// 	this._dbService.addDataIdCustom('tasks', this.actual_user, this.form)
	// 		.then( () => swal('Tarea guardada', 'La tarea ha sido guardada con éxito', 'success') )
	// 		.catch( () => swal('Error', 'La tarea no ha podido guardarse, vuelva a intentarlo', 'error') );
	// }
}
