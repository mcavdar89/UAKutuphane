import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { KitapListComponent } from './kitap/kitap-list/kitap-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UAKutuphane';

  baslik?: string;

  /**
   *
   */
  constructor() {
    this.baslik = "Proje Başlığı";
  }


  degistir() {
    this.baslik = "Proje Başlığı Değişti";
  }

}
