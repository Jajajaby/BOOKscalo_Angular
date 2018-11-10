import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {
	
	constructor(private router:Router){

	}

	canActivate() {
		const admin = JSON.parse(localStorage.getItem('user')).role;

		if( admin === 'admin' ) {
			return true;
		}else {
			// TODO: Mostrar un 403
			console.error('Bloqueado por el AdminGuard');
			this.router.navigate(['/']);
			return false;
		}
	}
}