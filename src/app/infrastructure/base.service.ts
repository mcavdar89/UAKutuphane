import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppConfig } from './app-config';


export abstract class BaseService{

  httpClient: HttpClient;
appConig:AppConfig;

  constructor() { 
    this.httpClient = inject(HttpClient);
    this.appConig = inject(AppConfig);
  }
}
