import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Books } from "../../interface/books.interface";
import { BooksService } from "../../services/books.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  view_bar:string = 'all';

  constructor() { }

  ngOnInit() {
  }

}
