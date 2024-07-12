import { HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { inject } from '@angular/core';
import { AppConfig } from '../app-config';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {

  debugger;

  const authService: AuthService = inject(AuthService);

  let appConfig = inject(AppConfig);

  let url: string = req.url;

  let headers: HttpHeaders = new HttpHeaders();
  let reqClone: HttpRequest<any>;

  let jwt = authService.getJwt();
  if (jwt) {
    headers.set("Authorization", `Bearer ${jwt}`);
    
  }
  
  let _responseType: 'arraybuffer' | 'blob' | 'json' | 'text' = "json";


  url = appConfig.baseUrl + url;



  reqClone = req.clone({
    responseType: _responseType,
    headers: headers,
    url: url
  });





  return next(reqClone);
};
