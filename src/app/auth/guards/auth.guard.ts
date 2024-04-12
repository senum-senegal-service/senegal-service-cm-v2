import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private keycloakService: KeycloakService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.keycloakService.isLoggedIn()) {
      console.log("yes")
      return true;
    } else {
      // Rediriger l'utilisateur vers la page de connexion
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

}
