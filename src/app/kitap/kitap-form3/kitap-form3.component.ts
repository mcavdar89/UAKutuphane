import { Component } from '@angular/core';
import { BaseFormComponent } from '../../infrastructure/base-form.component';

@Component({
  selector: 'app-kitap-form3',
  standalone: true,
  imports: [],
  templateUrl: './kitap-form3.component.html',
  styleUrl: './kitap-form3.component.scss'
})
export class KitapForm3Component extends BaseFormComponent {

  constructor() {
    super();
    this.formControlTemplate = [
      { key: 'ad',label:'Kitap Ad', required: true, minLength: 3, maxLength: 50 },
      { key: 'yazar', label:'Yazar',  required: true, minLength: 3, maxLength: 50 },
    ];
  }
}
