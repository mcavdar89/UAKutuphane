export interface Kitap {
    id: number;
    ad: string;
    yazar: string;
    yayinEvi: string;
    basimYili: number;
    kayitTarihi: Date;
    sonVerilmeTarihi: Date;
    stoktaMi: boolean;
}