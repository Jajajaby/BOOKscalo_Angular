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

		if( admin === 'administrador' ) {
			console.log('PASO EL ADMINGUARD');
			return true;
		}else {
			console.error('Bloqueado por el AdminGuard');
			this.router.navigate(['/']);
			return false;
		}
	}
}