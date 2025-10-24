import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Catalogo } from '../catalogo/catalogo';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  imports: [RouterModule,Catalogo,CommonModule,HttpClientModule],
    standalone: true,
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

}
