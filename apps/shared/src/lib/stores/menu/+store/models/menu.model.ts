export interface Category {
  id: number;
  name: string;
}

export interface Dish {
  id: number;
  name: string;
  categoryId: number;
  ingredients: number[];
  allergens: number[];
}

export interface Ingredient {
  id: number;
  name: string;
}

export interface Allergen {
  id: number;
  name: string;
}

export interface MenuState {
  categories: Category[];
  dishes: Dish[];
  ingredients: Ingredient[];
  allergens: Allergen[];
  filteredDishes: Dish[];
}