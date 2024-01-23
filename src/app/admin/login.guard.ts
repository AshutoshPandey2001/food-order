import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private login:LoginService, private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, tstate: RouterStateSnapshot):boolean | Promise<boolean>{
      if(!this.login.isLogin()){
          this.router.navigate(['/login']);
      }
      return this.login.isLogin();  
  }
  
}
