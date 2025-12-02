import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api-service/api-service';

@Component({
  selector: 'app-fromulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './fromulario.html',
  styleUrl: './fromulario.css'
  
})

export class Fromulario {

  formUsuario!: FormGroup;

  constructor(private formBuild:FormBuilder , private apiService:ApiService) {
    this.formUsuario=this.formBuild.group({
      nombre:['', Validators.required],
      correo:['', [Validators.required, Validators.email]],
      contrasena:['', [Validators.required]],
      Ccontrasena:['', [Validators.required]]
    })
    }
  
     registrarUsuario() {
    if (this.formUsuario.valid) {


      const usuario = {
      nombreUsuario: this.formUsuario.get('nombre')?.value,
      correoUsuario: this.formUsuario.get('correo')?.value,
      contrasena: this.formUsuario.get('contrasena')?.value,
      Ccontrasena: this.formUsuario.get('Ccontrasena')?.value,
      rol: "CLIENTE",
      fechaRegistro: new Date()  
    };

      this.apiService.crearUsuario(usuario).subscribe({
        next: (res) => {
          console.log("Usuario creado:", res);
          alert("Usuario registrado correctamente");
          this.formUsuario.reset();
        },
        error: (err) => {
          console.error("Error al crear usuario:", err);
          alert("Ocurrió un error al registrar el usuario");
        }
      });
    } else {
      console.log("Formulario inválido");
    }
  }

}


export interface Usuario {
  id?: number;
  nombreUsuario: string;
  correoUsuario: string;
  contrasena: string;
  Ccontrasena: string;
}

