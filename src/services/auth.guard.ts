import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(private router: Router, private apiService: ApiService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let urls = state.url.split('/');
        if (urls[1].includes('login')) {
            if (this.apiService.isLoggedIn()) {
                this.router.navigateByUrl("/orders");
            }
            return true;
        } else {
            if (this.apiService.isLoggedIn()) {
                return true;
            }
            this.apiService.signout();
            this.router.navigateByUrl("/");
            return false;
        }
    }
}
