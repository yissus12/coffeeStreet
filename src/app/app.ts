import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { S1 } from './s1/s1';
import { S2 } from './s2/s2';
import { S3 } from './s3/s3';
import { S4 } from './s4/s4';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,S1,S2,S3,S4,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coffeeStreet');
}
