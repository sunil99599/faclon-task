import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenserive: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.tokenserive.getToken();
    if (token) {
      // const data = this.tokenserive.getPayload();
      // if (data.roles.includes('Admin') ) {
      //   return true;
      // }
      // this.router.navigate(['/login'], { queryParams: { return: state.url } });
      // return false;
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { return: state.url } });
    return false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TaskOwnerGuard implements CanActivate {
  constructor(private router: Router, private tokenserive: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.tokenserive.getToken();
    if (token) {
      const data = this.tokenserive.getPayload();
      if (data.roles.includes('Task Owner')) {
        return true;
      }
      this.router.navigate(['/login'], { queryParams: { return: state.url } });

      return false;
    }
    this.router.navigate(['/login'], { queryParams: { return: state.url } });

    return false;
  }
}
