import { Component, OnInit } from '@angular/core';

// Inicializa los plugins
declare function init_plugins();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
