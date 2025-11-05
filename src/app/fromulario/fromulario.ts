import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fromulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fromulario.html',
  styleUrl: './fromulario.css'
  
})

export class Fromulario {

  formUsuario!: FormGroup;

  constructor(private formBuild:FormBuilder) {
    this.formUsuario=this.formBuild.group({
      nombre:['', Validators.required],
      correo:['', [Validators.required, Validators.email]],
      contrasena:['', [Validators.required]],
      Ccontrasena:['', [Validators.required]]
    })
    }

    registrarUsuario(){
      if(this.formUsuario.invalid){
    console.log("Usuario registrado:", this.formUsuario.value);
      }}
}


export interface Usuario {
  id?: number;
  nombre: string;
  correo: string;
  contrasena: string;
  Ccontrasena: string;
}

