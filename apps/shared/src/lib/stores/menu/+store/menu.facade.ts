import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { loadCategories, loadDishes, loadIngredients, loadAllergens, filterDishes } from "./menu.actions";
import { selectAllCategories, selectAllDishes, selectFilteredDishes, selectAllIngredients, selectAllAllergens } from "./menu.selectors";

@Injectable({
  providedIn: 'root'
})
export class MenuFacade {
  categories$ = this.store.select(selectAllCategories);
  dishes$ = this.store.select(selectAllDishes);
  filteredDishes$ = this.store.select(selectFilteredDishes);
  ingredients$ = this.store.select(selectAllIngredients);
  allergens$ = this.store.select(selectAllAllergens);

  constructor(private store: Store) {}

  loadMenuData(): void {
    this.store.dispatch(loadCategories());
    this.store.dispatch(loadDishes());
    this.store.dispatch(loadIngredients());
    this.store.dispatch(loadAllergens());
  }

  applyFilter(criteria: any): void {
    this.store.dispatch(filterDishes({ criteria }));
  }
}