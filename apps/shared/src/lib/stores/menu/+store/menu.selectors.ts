import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MenuState } from './models/menu.model';

export const selectMenuState = createFeatureSelector<MenuState>('menu');

export const selectAllCategories = createSelector(selectMenuState, (state) => state.categories);
export const selectAllDishes = createSelector(selectMenuState, (state) => state.dishes);
export const selectFilteredDishes = createSelector(selectMenuState, (state) => state.filteredDishes);
export const selectAllIngredients = createSelector(selectMenuState, (state) => state.ingredients);
export const selectAllAllergens = createSelector(selectMenuState, (state) => state.allergens);
