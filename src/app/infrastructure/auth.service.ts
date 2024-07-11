import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

  }

  getJwt(): string | undefined {
    return localStorage.getItem('jwt') ?? undefined;
  }
  setJwt(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }


}
