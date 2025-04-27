import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { UsuarioLogado } from "../models/usuario-logado";
import { LocalStorageService } from "../service/local-storage.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private storageService: LocalStorageService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.loggedInUserValue;
        const currentUserLocalStorage = this.storageService.get('loggedInUser');

        console.log(currentUser);
        if (currentUser !== null && typeof currentUser === 'object' && Object.keys(currentUser).length > 0 && currentUserLocalStorage !== null) {
            // logged in so return true
            this.storageService.get('loggedInUser') !== undefined ?? this.storageService.set('loggedInUser', JSON.stringify(currentUser));
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
      }
}
