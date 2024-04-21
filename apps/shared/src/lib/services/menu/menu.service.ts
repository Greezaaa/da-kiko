import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Allergen, Category, Dish, Ingredient } from "../../stores/menu/+store/models/menu.model";


@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  private dataPath = 'assets/data/menu/';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.dataPath}categories.json`);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.dataPath}dishes.json`);
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.dataPath}ingredients.json`);
  }

  getAllergens(): Observable<Allergen[]> {
    return this.http.get<Allergen[]>(`${this.dataPath}allergens.json`);
  }
}
