import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {TokenStorageService} from './auth/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router,public tokenservice:TokenStorageService) { }
  canActivate(): boolean {
    if (!this.tokenservice.isAuthenticated()) {

      this.router.navigate(['home']);
      return false;

    }
    return true;
}
}
