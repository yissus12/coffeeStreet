import { Component } from '@angular/core';
import { Nav } from "../nav/nav";
import { S4 } from "../s4/s4";
import { S1 } from "../s1/s1";
import { S2 } from "../s2/s2";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-principal',
  imports: [Nav, S4, S1, S2, Footer],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
