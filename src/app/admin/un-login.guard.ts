import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UnLoginGuard implements CanActivate {
  constructor(private login:LoginService, private router:Router,){}
  canActivate(route: ActivatedRouteSnapshot, tstate: RouterStateSnapshot):boolean | Promise<boolean>{
    if(this.login.isLogin()){
        this.router.navigate(['/dashboard']);
    }
    return true;  
 }
}
