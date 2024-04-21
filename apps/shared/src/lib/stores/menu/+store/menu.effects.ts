import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { switchMap, map, catchError, of } from "rxjs";

import { MenuDataService } from "../../../services/menu/menu.service";
import { loadCategories, categoriesLoaded, loadDishes, dishesLoaded } from "./menu.actions";

@Injectable()
export class MenuEffects {
  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(loadCategories),
    switchMap(() => this.menuService.getCategories().pipe(
      map(categories => categoriesLoaded({ categories })),
      catchError(error => of({ type: '[Menu] Load Categories Failed', error }))
    ))
  ));

  loadDishes$ = createEffect(() => this.actions$.pipe(
    ofType(loadDishes),
    switchMap(() => this.menuService.getDishes().pipe(
      map(dishes => dishesLoaded({ dishes })),
      catchError(error => of({ type: '[Menu] Load Dishes Failed', error }))
    ))
  ));

  constructor(private actions$: Actions, private menuService: MenuDataService) {}
}