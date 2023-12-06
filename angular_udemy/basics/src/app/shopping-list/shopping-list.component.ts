import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Salsa', 120),
    new Ingredient('Farina', 100),
  ];
}
