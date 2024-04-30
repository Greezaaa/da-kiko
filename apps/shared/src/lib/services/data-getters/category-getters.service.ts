import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  getCategoryName(value: string): string {
    return `menu.category.${value}.name`;
  }
  getCategoryDescription(value: string): string {
    return `menu.category.${value}.description`;
  }
}
