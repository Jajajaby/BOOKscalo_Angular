import { Component, OnInit } from '@angular/core';

// Inicializa los plugins
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    init_plugins();
  }


}
