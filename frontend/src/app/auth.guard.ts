import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(): boolean {
		const isLoggedIn = localStorage.getItem('MY_PRECIOUS'); // ... your login logic here
		if (isLoggedIn) {
			return true;
		} else {
			this.router.navigate([ '/login' ]);
			return false;
		}
	}
}
