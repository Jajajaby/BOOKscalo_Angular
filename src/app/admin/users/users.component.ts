import { Component, OnInit } from '@angular/core';

// SERVICES
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users:any;

  constructor( private _dbService:DatabaseService) { 
    this._dbService.getData( "users")
			.valueChanges()
			.subscribe( data => this.users = data );
  }

  ngOnInit() {
  }

}
