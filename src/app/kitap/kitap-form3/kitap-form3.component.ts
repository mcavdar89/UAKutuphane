import { Component, Input, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../infrastructure/base-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Kitap } from '../models/kitap.model';

@Component({
  selector: 'app-kitap-form3',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './kitap-form3.component.html',
  styleUrl: './kitap-form3.component.scss'
})
export class KitapForm3Component extends BaseFormComponent implements OnInit{

  @Input() kitap: Kitap | any;

  constructor() {
    super();
    this.formControlTemplate = [
      { key: 'ad',label:'Kitap Ad', required: true, minLength: 3, maxLength: 50 },
      { key: 'yazar', label:'Yazar',  required: true, minLength: 3, maxLength: 50 },
    ];
  }
  ngOnInit(): void {
    this.setForm(this.kitap);
  }
  onSubmit(item: Kitap) {

    debugger;

    if (this.formGroup.valid) {
      //kayıt yapılacak
    } else {
      alert("hataları gideriniz");
    }
  }
}
