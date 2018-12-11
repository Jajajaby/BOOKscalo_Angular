import { Injectable } from '@angular/core';

import { MENU_ADMIN } from '../../data/menuadmin.data';
import { CATEGORIES } from '../../data/categories.data';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any=[];

  constructor() {
    // Esta preguntando que usuario esta conectado
    setInterval( () => {
      if( localStorage.getItem("user") ) {
        let role = JSON.parse(localStorage.getItem("user")).role;
        if (role === 'admin'){
          this.menu = MENU_ADMIN;
        }else if (role === 'normal'){
         this.menu = CATEGORIES;
        }
      }
    }, 500);
  }
}
