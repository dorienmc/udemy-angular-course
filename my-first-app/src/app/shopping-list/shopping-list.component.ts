import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Beans', 1),
    new Ingredient('Tomatos', 5)
  ];

  constructor() { }

  onIngredientAdded(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
  }

}
