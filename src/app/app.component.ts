import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){
    if(JSON.parse(localStorage.getItem('session')) === null) {
			localStorage.setItem('session', JSON.stringify({
				session: false,
				rememberMe: false
			}));
		}
  }
}