import { Component, OnInit } from '@angular/core';

// Inicializa los plugins
declare function init_plugins();

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
