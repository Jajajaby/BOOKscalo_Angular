import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Books } from "../../interface/book.interface";
import { BooksService } from "../../services/books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

	
  constructor() { }

  ngOnInit() {
  }


}
