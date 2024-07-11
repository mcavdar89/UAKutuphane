import { Injectable } from '@angular/core';
import { LoginDto } from './models/logindto.model';
import { Observable } from 'rxjs';
import { BaseService } from '../infrastructure/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  

  constructor() {
    super();
  }

  getJwt(): string | undefined {
    return localStorage.getItem('jwt') ?? undefined;
  }
  setJwt(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  login(item: LoginDto): Observable<any> {
    return this.httpClient.post<any>(this.appConig.baseUrl + 'api/account/login', item);
  }






}
