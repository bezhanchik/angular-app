import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  selectedCount = 0;
  totalValue = 0;
  currentPage = 'Главная';

  update(selectedCount: number, totalValue: number): void {
    this.selectedCount = selectedCount;
    this.totalValue = totalValue;
  }

  setPage(page: string): void {
    this.currentPage = page;
  }
}