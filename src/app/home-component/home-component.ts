import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StateService } from '../shared/state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  constructor(private state: StateService) {
    this.state.setPage('Главная');
    this.state.update(0, 0); 
  }
}