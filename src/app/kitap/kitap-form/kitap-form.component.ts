import { Component, Input, OnInit } from '@angular/core';
import { Kitap } from '../models/kitap.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kitap-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kitap-form.component.html',
  styleUrl: './kitap-form.component.scss',
})
export class KitapFormComponent implements OnInit {
  @Input() kitap: Kitap |any;

  ngOnInit(): void {
    console.log(this.kitap);
  }



}
