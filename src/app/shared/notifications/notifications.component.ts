import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  messages: any = [];
  new_messages

  constructor( private _dbService:DatabaseService ) { 

    this._dbService.getData( "global-messages")
			.valueChanges()
			.subscribe( data => {
        this.messages = [];
        this.messages = data;
      });

    // Obtener la cantidad de mensajes no leidos
		this._dbService.getDataQuery('global-messages', 'status', '==', false)
      .valueChanges()
      .subscribe( data => this.new_messages = data.length );
  }

  ngOnInit() {
  }

}
