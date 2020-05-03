import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const val = localStorage.getItem('isUserLoggedIn'); // converted string to boolean
    if (val === 'true') {
      console.log('User is logged In', val);
    //  this.router.navigateByUrl('/customer');
      return true;
    } else {
      console.log('User is logged In', val);
      return true;
    }

  }


}
