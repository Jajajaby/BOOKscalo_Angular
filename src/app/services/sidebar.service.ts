import { Injectable } from '@angular/core';

import { MENU_ADMIN } from '../../data/menuadmin.data';
import { CATEGORIES } from '../../data/categories.data';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any=[];

  constructor() {
    if (JSON.parse(localStorage.getItem("user")).role === 'admin'){
      this.menu = MENU_ADMIN;
    }else{
      this.menu = CATEGORIES;
    }
  }
}
