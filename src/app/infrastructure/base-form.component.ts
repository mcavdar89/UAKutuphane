import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormControlTemplate } from './formControlTemplate.model';

@Component({
  selector: 'app-base-form',
  standalone: true,
  imports: [],
  template: '',

})
export class BaseFormComponent {

  _fb: FormBuilder;
  formGroup: FormGroup | any;
  formControlTemplate: FormControlTemplate[] = [];
  constructor() {
    this._fb = inject(FormBuilder);
  }


  setForm(item: any) {
    this.setFormGroup();
    if (item)
      this.formGroup.patchValue(item);
  }


  setFormGroup() {
    let group: any = {};

    this.formControlTemplate.forEach(item => {
      group[item.key] = new FormControl(
        { value: item.value || null, disabled: item.disabled },
        this.getFormValidators(item)
      );
    });

    this.formGroup = this._fb.group(group);

  }

  getFormValidators(control: any): ValidatorFn[] {
    let validators: any[] = [];
    if (control.required) {
      validators.push(Validators.required);
    }

    if (control.Min) {
      validators.push(Validators.min(control.Min));
    }

    if (control.Max) {
      validators.push(Validators.max(control.Max));
    }

    if (control.MinLength || control.Len) {
      validators.push(Validators.minLength(control.MinLength));
    }

    if (control.MaxLength || control.Len) {
      validators.push(Validators.maxLength(control.MaxLength));
    }

    if (control.MinLength || control.Len) {
      validators.push(Validators.minLength(control.MinLength));
    }

    if (control.Pattern) {
      validators.push(Validators.pattern(control.Pattern));
    }

    if (control.Email) {
      validators.push(Validators.email);
    }

    return validators;
  }




}
