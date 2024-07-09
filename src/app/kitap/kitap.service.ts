import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class KitapService {

  constructor() { }


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
