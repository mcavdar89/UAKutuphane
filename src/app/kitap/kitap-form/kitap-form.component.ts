import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Kitap } from '../models/kitap.model';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-kitap-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kitap-form.component.html',
  styleUrl: './kitap-form.component.scss',
})
export class KitapFormComponent implements OnInit {
  @Input() kitap: Kitap | any;
  @ViewChild('kitapForm') kitapForm?: NgForm;

  ngOnInit(): void {

    console.log(this.kitap);
    setTimeout(() => {
      this.kitapForm?.control.patchValue(this.kitap);
      // .setValue(this.kitap);
    }, 100);



  }

  onSubmit(form: NgForm) {

    debugger;

    if (form.valid) {
      //kayıt yapılacak
    } else {
      alert("hataları gideriniz");
    }
  }


}
