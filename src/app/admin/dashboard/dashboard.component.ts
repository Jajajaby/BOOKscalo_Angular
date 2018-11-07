import { Component, OnInit } from '@angular/core';

// SERVICES
import { DatabaseService } from '../../services/database.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  user:any;
  users:any;

  count_users:number;
  count_books:number;
  count_messages:number;

  form:any;

  constructor( private _dbService:DatabaseService ) {
		this.user = JSON.parse( localStorage.getItem( "user" ) );

    this._dbService.getData( "users")
			.valueChanges()
      .subscribe( data => {
        this.users = data;
        this.count_users = data.length;
      });
      
    this._dbService.getData( "books")
			.valueChanges()
      .subscribe( data => this.count_books = data.length );
      
    this._dbService.getData( "messages-transaction")
			.valueChanges()
			.subscribe( data => this.count_messages = data.length );
  }

  ngOnInit() {
    this.form = new FormGroup({
      task:         new FormControl(Validators.required),
      description:  new FormControl(Validators.required),
      priority:     new FormControl(Validators.required)
    });
  
  }

  addTask(){
    this._dbService.addDataIdCustom('tasks', this.user, this.form)
      .then( () => swal('Tarea guardada', 'La tarea ha sido guardada con éxito', 'success') )
			.catch( () => swal('Error', 'La tarea no ha podido guardarse, vuelva a intentarlo', 'error') );
  }
}
