import { HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../infrastructure/auth.service';
import { inject } from '@angular/core';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {

  const authService: AuthService = inject(AuthService);


  let headers: HttpHeaders = new HttpHeaders();
  let reqClone: HttpRequest<any>;







  reqClone = req.clone({
    responseType: _responseType,
    headers: headers,
    url: url
  });





  return next(req);
};
