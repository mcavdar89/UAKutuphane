import { Component, OnInit, inject } from '@angular/core';
import { Kitap } from '../models/kitap.model';
import { KitapService } from '../kitap.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KitapFormComponent } from '../kitap-form/kitap-form.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitapForm2Component } from '../kitap-form2/kitap-form2.component';
import { KitapForm3Component } from '../kitap-form3/kitap-form3.component';

@Component({
  selector: 'app-kitap-list',
  standalone: true,
  imports: [CommonModule, DialogModule,ButtonModule, FormsModule, KitapForm3Component],
  templateUrl: './kitap-list.component.html',
  styleUrl: './kitap-list.component.scss'
})
export class KitapListComponent implements OnInit {

  serchKey?: string;

  isModelOpen: boolean = false;

  kitapList?: Kitap[];
  filterKitapList?: Kitap[];
  seciliKitap?: Kitap;


  _kitapService: KitapService;

  constructor() {
    console.log("Constructor çalıştı");
    this._kitapService = inject(KitapService);
  }
  ngOnInit(): void {
    console.log("ngOnInit çalıştı");

    this.kitapList = this._kitapService.kitapListele();
    this.filterKitapList = JSON.parse(JSON.stringify(this.kitapList)) as Kitap[];
  }

  setSerchKey(event: any) {
    debugger;
    this.filterKitapList = JSON.parse(JSON.stringify(this.kitapList?.filter(d => d.ad.includes(this.serchKey ?? '')))) as Kitap[];


    //this.filterKitapList =  {...this.kitapList?.filter(d=>d.ad.includes(this.serchKey??''))}as Kitap[];

  }
  setIlkDataAd() {
    this.filterKitapList![0].ad = "Değişti";
  }


  setDuzenleKitap(item: Kitap) {
    debugger;
    this.seciliKitap = item;    
    this.isModelOpen = true;

  }


 
 



}
