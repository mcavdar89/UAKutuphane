import { Injectable } from '@angular/core';
import { BaseService } from '../infrastructure/base.service';
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/responsedto.model';
import { Personel } from './models/personel.model';

@Injectable({
  providedIn: 'root'
})
export class PersonelService extends BaseService{


  constructor() { 
    super();
  }

  getPersonelList():Observable<Personel[]>{
    return this.httpClient.get<Personel[]>('http://localhost:5200/api/personel/list');
  }



}
