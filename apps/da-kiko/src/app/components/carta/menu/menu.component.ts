import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Menu } from '@lib/shared';

import { pizzas } from '../../../extras/menu/pizzas';
import { sauces } from '../../../extras/menu/sauces';
import { pasta } from '../../../extras/menu/pasta';
import { bruschettas } from '../../../extras/menu/bruschettas';
import { extras } from '../../../extras/menu/extras';
import { ingredients } from '../../../extras/menu/ingridientes';

@Component({
  standalone: true,
  selector: 'kiko-carta-menu',
  imports: [TranslateModule, CommonModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  carta!: Menu;
  ngOnInit(): void {
    this.createCarta();
  }

  createCarta(): void {
    this.carta = {
      pizzas,
      sauces,
      pasta,
      bruschettas,
      extras,
    };
  }

  getIngredient(ingredientId: number): string {
    const ingredient = ingredients.find((i) => i.id === ingredientId);
    return ingredient ? `menu.ingredients.${ingredient.name}` : '';
  }
}
