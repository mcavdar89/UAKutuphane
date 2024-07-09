import { Component, OnInit, inject } from '@angular/core';
import { Kitap } from '../models/kitap.model';
import { KitapService } from '../kitap.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kitap-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kitap-list.component.html',
  styleUrl: './kitap-list.component.scss'
})
export class KitapListComponent implements OnInit{
 
  serchKey?:string;


  kitapList?: Kitap[];
  filterKitapList?: Kitap[];

  _kitapService:KitapService;

  constructor() {
    console.log("Constructor çalıştı");
    this._kitapService = inject(KitapService);
  }


  setSerchKey(event:any){
    debugger;
    this.filterKitapList = JSON.parse(JSON.stringify(this.kitapList?.filter(d=>d.ad.includes(this.serchKey??'')))) as Kitap[];
    
    
    //this.filterKitapList =  {...this.kitapList?.filter(d=>d.ad.includes(this.serchKey??''))}as Kitap[];

  }
  setIlkDataAd(){
    this.filterKitapList![0].ad = "Değişti";
  }


  ngOnInit(): void {
    console.log("ngOnInit çalıştı");

    this.kitapList = this._kitapService.kitapListele();
    this.filterKitapList = JSON.parse(JSON.stringify(this.kitapList)) as Kitap[];
  }



}
