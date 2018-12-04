import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// SERVICES
import { DateService } from '../../services/date.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-global-message',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.css']
})
export class GlobalMessageComponent implements OnInit {

  form:any; 
  actual_user:any;

  // Traen las colecciones
  users:any;
  reports:any;

  // Arreglos de usuarios para enviar mensajes globales
  active_users:any = [];
  inactive_users:any = [];
  reported_users:any = [];

	options:string = 'new_message'; // Controla las opciones que se muestran en la columna derecha


  constructor(private _date:DateService,
              private _dbService:DatabaseService) { 
    
    this.actual_user = JSON.parse(localStorage.getItem('user'));

    this._dbService.getDataQuery( "users", "status", "==", true)
			.valueChanges()
			.subscribe( data => {
				this.active_users = data;
    });

    this._dbService.getDataQuery( "users", "status", "==", false)
			.valueChanges()
			.subscribe( data => {
				this.inactive_users = data;
    });
      
    this._dbService.getDataQuery("reports", "type", "==", "Reporte de usuario")
			.valueChanges()
			.subscribe( (data:any) => {
        this.reported_users = [];
        for(let r of data){
          this.reported_users.push(r.user_reported);
        }
    });

    this._dbService.getData( "reports")
			.valueChanges()
			.subscribe( data => {
				this.reports = data;
			});
  }

  ngOnInit() {

    this.form = 				new FormGroup({
		  receiver: 				new FormControl(undefined, Validators.required),
			title: 			      new FormControl(undefined, Validators.required),
			body: 						new FormControl(undefined, Validators.required),
		})

  }

  sendMessage(){
    let message = {
      receiver:    '',
      title:       this.form.value.title,
      body:        this.form.value.body,
      day:         this._date.actual_day(),
      hour:        this._date.actual_hour(),
      status:      false
    }

    switch (this.form.value.receiver) {
      case 'Usuarios activos':
        message.receiver = this.active_users;
        break;
      case 'Usuarios no activos':
        message.receiver = this.inactive_users;
        break;
      case 'Usuarios reportados':
        message.receiver = this.reported_users;
        break;
      default:
        break;
    }

		// Envía el mensaje a la DB.
		this._dbService.addData('global-messages', message)
    .then( () => swal('Mensaje enviado', 'El mensaje ha sido enviado con éxito', 'success') )
    .catch( () => swal('Error', 'El mensaje no ha podido enviarse, vuelva a intentarlo', 'error') );
  }

  moveToDiscart(){

  }

  showMessages(){
    
  }

}
