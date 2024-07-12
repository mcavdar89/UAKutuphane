import { Routes } from '@angular/router';
import { KitapListComponent } from './kitap/kitap-list/kitap-list.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { authGuard } from './gurads/auth.guard';

export const routes: Routes = [

    { path: 'login', loadComponent: () => import('./auth/login-form/login-form.component').then(m => m.LoginFormComponent) },

    {
        path: '', component: LayoutComponent, canActivate:[authGuard], children: [
            { path: 'kitap/list', loadComponent: () => import('./kitap/kitap-list/kitap-list.component').then(m => m.KitapListComponent) },
            { path: 'personel/list', loadComponent: () => import('./personel/personel-list/personel-list.component').then(m => m.PersonelListComponent) }
        ]
    }
];
