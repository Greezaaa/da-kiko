import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category, MenuFacade, MenuTranslationService, TranslatePipe } from '@lib/shared';

@Component({
  selector: 'kiko-carta-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  imports: [CommonModule, TranslatePipe],
  styleUrl: './categories.component.scss',
})
export class CartaCategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private menuFacade: MenuFacade, private _mts: MenuTranslationService) {}

  ngOnInit(): void {
    this.menuFacade.categories$.subscribe((data) => (this.categories = data));
  }

  getCategoryName(value: string) {
    return this._mts.getCategoryName(value);
  }
  getCategoryDescription(value: string) {
    return this._mts.getCategoryDescription(value);
  }
}
