import { Category } from '../enums/category.enum';

export interface MenuItem {
  id: number;
  name: string;
  category: Category;
  ingredients?: number[];
  price: number;
  description: string;
  special: boolean;
}

export interface Pizza extends MenuItem {
  ingredients: number[];
}

export type Pasta = MenuItem;

export type Sauce = MenuItem;

export interface Bruschetta extends MenuItem {
  ingredients: number[];
}

export interface Extra {
  name: string;
  price: number;
  category: Category;
}

export interface Menu {
  pizzas: Pizza[];
  pasta: Pasta[];
  sauces: Sauce[];
  bruschettas: Bruschetta[];
  extras: Extra;
}
