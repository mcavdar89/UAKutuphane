import { Component, inject, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../infrastructure/base-form.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDto } from '../models/logindto.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent extends BaseFormComponent implements OnInit {

  _authService: AuthService;
  constructor() {
    super();

    this._authService = inject(AuthService);



    this.formControlTemplate = [
      { key: 'kullaniciAdi', required: true },
      { key: 'sifre', required: true }
    ]

  }
  ngOnInit(): void {
    this.setForm();
  }


  login(item: LoginDto) {
    this._authService.login(item).subscribe(resp => {
      if (resp.satatus)
        this._authService.setJwt(resp.data);
    })
  }



}
