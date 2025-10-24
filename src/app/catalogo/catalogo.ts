import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api-service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo implements OnInit {
  productos: any[] = [];

  constructor(private apiService: ApiService, private http:HttpClient) {}


  cargarProductos(){
    this.apiService.getAll().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al cargar productos', err)});
      
}
  ngOnInit():void {
    this.cargarProductos();
  }
}
