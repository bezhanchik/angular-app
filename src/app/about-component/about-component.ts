import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StateService } from '../shared/state';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  checked: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {
  menuItems: MenuItem[] = [
    { id: 1, name: 'Пункт 1', value: 10, checked: false },
    { id: 2, name: 'Пункт 2', value: 25, checked: false },
    { id: 3, name: 'Пункт 3', value: 50, checked: false },
    { id: 4, name: 'Пункт 4', value: 75, checked: false },
    { id: 5, name: 'Пункт 5', value: 100, checked: false }
  ];

  constructor(private state: StateService) {
    this.state.setPage('Меню');
    this.updateState();
  }

  onCheckboxChange(item: MenuItem): void {
    item.checked = !item.checked;
    this.updateState();
  }

  private updateState(): void {
    const selected = this.menuItems.filter(item => item.checked);
    const count = selected.length;
    const sum = selected.reduce((total, item) => total + item.value, 0);
    this.state.update(count, sum);
  }
}