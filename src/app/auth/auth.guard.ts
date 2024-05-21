import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}