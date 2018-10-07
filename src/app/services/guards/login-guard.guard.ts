import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
	canActivate() {
		console.log("Pasó por el login guard");
		return true;
	}
}
