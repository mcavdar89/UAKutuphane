import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


export abstract class BaseService{

  httpClient: HttpClient;


  constructor() { 
    this.httpClient = inject(HttpClient);
  }
}
