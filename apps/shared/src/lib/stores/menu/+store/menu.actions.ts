import { createAction, props } from "@ngrx/store";

import { Category, Dish, Ingredient, Allergen } from "./models/menu.model";

export const loadCategories = createAction('[Menu] Load Categories');
export const categoriesLoaded = createAction('[Menu] Categories Loaded', props<{ categories: Category[] }>());

export const loadDishes = createAction('[Menu] Load Dishes');
export const dishesLoaded = createAction('[Menu] Dishes Loaded', props<{ dishes: Dish[] }>());

export const loadIngredients = createAction('[Menu] Load Ingredients');
export const ingredientsLoaded = createAction('[Menu] Ingredients Loaded', props<{ ingredients: Ingredient[] }>());

export const loadAllergens = createAction('[Menu] Load Allergens');
export const allergensLoaded = createAction('[Menu] Allergens Loaded', props<{ allergens: Allergen[] }>());

export const filterDishes = createAction('[Menu] Filter Dishes', props<{ criteria: any }>());