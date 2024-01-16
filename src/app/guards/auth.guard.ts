import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate(route, state);
};
