import { Component, OnInit } from '@angular/core';

// Inicializa los plugins
declare function init_plugins();

@Component({
  selector: 'app-pageforbidden',
  templateUrl: './pageforbidden.component.html',
  styleUrls: ['./pageforbidden.component.css']
})
export class PageforbiddenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
