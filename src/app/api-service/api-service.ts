import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-service',
  imports: [],
  templateUrl: './api-service.html',
  styleUrl: './api-service.css'
})
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlProducto= 'https://localhost:8080/producto';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlProducto}/listar`);
  }

} 