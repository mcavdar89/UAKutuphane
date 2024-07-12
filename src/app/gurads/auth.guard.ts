import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let _authService = inject(AuthService);
  let _router = inject(Router);

  if (!_authService.isLogin()) {
    _router.navigate(['login']);
    return false;
  }

  return true;
};
