import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-message-admin',
  templateUrl: './message-admin.component.html',
  styleUrls: ['./message-admin.component.css']
})
export class MessageAdminComponent {

  messages:any[];
  selected:any;
  loader:boolean = true;

  constructor( _dbService: DatabaseService ) {
    _dbService.getData('global-messages')  
      .valueChanges()
      .subscribe( resp => {
        this.messages = resp;
        this.loader = false;
      });
  }
}
