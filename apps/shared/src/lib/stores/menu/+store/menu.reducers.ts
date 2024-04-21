import { createReducer, on } from '@ngrx/store';

import { categoriesLoaded, dishesLoaded, ingredientsLoaded, allergensLoaded, filterDishes } from './menu.actions';
import { MenuState } from './models/menu.model';

export const initialState: MenuState = {
  categories: [],
  dishes: [],
  ingredients: [],
  allergens: [],
  filteredDishes: [],
};

export const menuReducer = createReducer(
  initialState,
  on(categoriesLoaded, (state, { categories }) => ({ ...state, categories })),
  on(dishesLoaded, (state, { dishes }) => ({ ...state, dishes, filteredDishes: dishes })),
  on(ingredientsLoaded, (state, { ingredients }) => ({ ...state, ingredients })),
  on(allergensLoaded, (state, { allergens }) => ({ ...state, allergens })),
  on(filterDishes, (state, { criteria }) => ({
    ...state,
    filteredDishes: state.dishes.filter((dish) => dish.categoryId === criteria.categoryId),
  }))
);
