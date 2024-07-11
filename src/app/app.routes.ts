import { Routes } from '@angular/router';
import { KitapListComponent } from './kitap/kitap-list/kitap-list.component';

export const routes: Routes = [
    {path:'kitap/list', loadComponent: ()=> import('./kitap/kitap-list/kitap-list.component').then(m => m.KitapListComponent)},
    {path:'personel/list', loadComponent: ()=> import('./personel/personel-list/personel-list.component').then(m => m.PersonelListComponent)}
];
