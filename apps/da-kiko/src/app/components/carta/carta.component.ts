import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Allergen, Category, Dish, Ingredient, MenuFacade, MenuTranslationService, TranslatePipe } from '@lib/shared';

import { CartaCategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'kiko-carta',
  standalone: true,
  templateUrl: 'carta.component.html',
  imports: [CommonModule, TranslatePipe, CartaCategoriesComponent],
})
export class CartaComponent implements OnInit {
  // categories: Category[] = [];
  dishes: Dish[] = [];
  ingredients: Ingredient[] = [];
  allergens: Allergen[] = [];

  constructor(private menuFacade: MenuFacade, private _mts: MenuTranslationService) {}

  ngOnInit(): void {
    this.menuFacade.loadMenuData();
    this.menuFacade.dishes$.subscribe((data) => (this.dishes = data));
    this.menuFacade.ingredients$.subscribe((data) => (this.ingredients = data));
    this.menuFacade.allergens$.subscribe((data) => (this.allergens = data));
    // this.menuFacade.categories$.subscribe((data) => (this.categories = data));
  }
}
