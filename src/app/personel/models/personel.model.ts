export interface Personel {
    /*
    "id": 1,
    "unvanId": 1,
    "unvanAd": "Yazılım Uzmanı",
    "isim": null,
    "ad": "Mehmet",
    "soyad": "TUYGUN",
    "tel": "          ",
    "dogumTarihi": "1979-12-10T00:00:00",
    "cinsiyet": "E",
    "aciklama": null
    */
    id:number;
    unvanId:number;
    unvanAd:string;
    isim:string;
    ad:string;
    soyad:string;
    tel:string;
    dogumTarihi:Date;
    cinsiyet:string;
    aciklama:string;
    
}