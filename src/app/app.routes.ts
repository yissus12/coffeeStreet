import { Routes } from '@angular/router';
import { Productos } from './productos/productos';
import { Principal } from './principal/principal';


export const routes: Routes = [
    {path: '', redirectTo: 'Principal', pathMatch: 'full'},
    {path: '', component: Principal},
    {path: 'productos', component: Productos}
];
