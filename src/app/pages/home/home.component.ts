import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	view_bar:string = 'all';

	constructor( private _dbService:DatabaseService ) {}


	ngOnInit() {}
}
