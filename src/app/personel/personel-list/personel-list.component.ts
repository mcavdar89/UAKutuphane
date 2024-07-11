import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Personel } from '../models/personel.model';
import { PersonelService } from '../personel.service';
@Component({
  selector: 'app-personel-list',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent implements OnInit {
  cols: Column[];
  personelList!: Personel[];

  _personelService: PersonelService;
  constructor() {

    this._personelService = inject(PersonelService);

    this.cols = [
      { field: 'ad', header: 'Ad' },
      { field: 'soyad', header: 'Soyad' },
      { field: 'unvanAd', header: 'Ünvan' },
      { field: 'tel', header: 'Telefon' },
      { field: 'dogumTarihi', header: 'Doğum Tarihi' },

    ]

  }
  ngOnInit(): void {
    this.getPersonelList();
  }

  getPersonelList() {
    this._personelService.getPersonelList().subscribe(resp => {
     debugger;
        this.personelList =resp;
    })
  }
}
interface Column {
  field: string;
  header: string;
}