import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private route: Router) {}
  canActivate(){
    if(this._authService.getCurrentUser()){
      return true;
    }else{
      this.route.navigate(['login']);
      return false
    }
  }
  
}
