import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StateService } from './shared/state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public state: StateService) {} 
}