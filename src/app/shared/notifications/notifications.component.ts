import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  count_messages: number;
  messages: any = [];

  constructor( private _dbService:DatabaseService ) { 

    this._dbService.getData( "global-messages")
			.valueChanges()
			.subscribe( data => {
        this.messages = [];
        this.messages = data;
      });
  }

  ngOnInit() {
  }

}
