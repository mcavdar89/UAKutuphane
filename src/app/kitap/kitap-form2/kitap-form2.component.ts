import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Kitap } from '../models/kitap.model';

@Component({
  selector: 'app-kitap-form2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './kitap-form2.component.html',
  styleUrl: './kitap-form2.component.scss'
})
export class KitapForm2Component {
  @Input() kitap: Kitap | any;
  _fb: FormBuilder;
  frm: FormGroup;

  constructor() {
    this._fb = inject(FormBuilder);
     this.frm = this._fb.group(
      {
        ad: new FormControl('', Validators.required),
        yazar: new FormControl('', Validators.required),
      }
    );
  }

  ngOnInit(): void {
   
    this.frm.patchValue(this.kitap);

  }
  onSubmit(item: Kitap) {

    debugger;

    if (this.frm.valid) {
      //kayıt yapılacak
    } else {
      alert("hataları gideriniz");
    }
  }




}
