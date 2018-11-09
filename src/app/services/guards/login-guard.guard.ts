import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
	
	constructor(private router:Router){

	}

	canActivate() {
		const session = JSON.parse(localStorage.getItem('session')).session;

		if(session) {
			return true;
		}else {
			console.error('Bloqueado por el Guard');
			this.router.navigate(['/login']);
			return false;
		}
	}
}
