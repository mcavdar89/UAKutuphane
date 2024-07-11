import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/responsedto.model';
import { Kitap } from './models/kitap.model';

@Injectable({
  providedIn:'root'
})
export class KitapService {


  httpClient: HttpClient;


  constructor() { 
    this.httpClient = inject(HttpClient);
  }


  getKitapList():Observable<ResponseDto<Kitap>>{
    return this.httpClient.get<ResponseDto<Kitap>>('http://localhost:5200/api/personel/list');
  }



  kitapListele() {
    return [
      { id: 1, ad: 'Kitap 1', yazar: 'Yazar 1', yayinEvi: 'Yayın Evi 1', basimYili: 2021, kayitTarihi: new Date(), sonVerilmeTarihi: new Date(), stoktaMi: true },
      { id: 2, ad: 'Kitap 2', yazar: 'Yazar 1', yayinEvi: 'Yayın Evi 1', basimYili: 2021, kayitTarihi: new Date(), sonVerilmeTarihi: new Date(), stoktaMi: true },
      { id: 3, ad: 'Kitap 3', yazar: 'Yazar 1', yayinEvi: 'Yayın Evi 1', basimYili: 2021, kayitTarihi: new Date(), sonVerilmeTarihi: new Date(), stoktaMi: true },
      { id: 4, ad: 'Kitap 4', yazar: 'Yazar 1', yayinEvi: 'Yayın Evi 1', basimYili: 2021, kayitTarihi: new Date(), sonVerilmeTarihi: new Date(), stoktaMi: true },
      { id: 5, ad: 'Kitap 5', yazar: 'Yazar 1', yayinEvi: 'Yayın Evi 1', basimYili: 2021, kayitTarihi: new Date(), sonVerilmeTarihi: new Date(), stoktaMi: true },
      { id: 6, ad: 'Kitap 6', yazar: 'Yazar 1', yayinEvi: 'Yayın Evi 1', basimYili: 2021, kayitTarihi: new Date(), sonVerilmeTarihi: new Date(), stoktaMi: true },

    ];

  }
}
