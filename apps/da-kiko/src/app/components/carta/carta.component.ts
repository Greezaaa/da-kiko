import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Allergen, Category, Dish, Ingredient, MenuFacade, TranslatePipe } from '@lib/shared';

@Component({
  selector: 'kiko-carta',
  standalone: true,
  templateUrl: 'carta.component.html',
  imports: [CommonModule, TranslatePipe],
})
export class CartaComponent implements OnInit {
  categories: Category[] = [];
  dishes: Dish[] = [];
  ingredients: Ingredient[] = [];
  allergens: Allergen[] = [];

  constructor(private menuFacade: MenuFacade) {}

  ngOnInit(): void {
    this.menuFacade.loadMenuData();
    this.menuFacade.dishes$.subscribe((data) => (this.dishes = data));
    this.menuFacade.ingredients$.subscribe((data) => (this.ingredients = data));
    this.menuFacade.allergens$.subscribe((data) => (this.allergens = data));
    this.menuFacade.categories$.subscribe((data) => (this.categories = data));
    console.log(this.allergens);
  }

  getTranslation(cat: string, name: string): string {
    return `menu.${cat}.${name}`;
  }
}
