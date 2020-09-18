import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chili Con Carne',
      'Beans with meat',
      'https://www.24kitchen.nl/files/styles/social_media_share/public/2019-10/shutterstock_1192492630.jpg?itok=RCqTgyci',
      [
        new Ingredient('Beans (canned)', 1),
        new Ingredient('Chili (tsp)', 1),
        new Ingredient('Minced meat (gr)', 400),
        new Ingredient('Tomatoes', 2),
      ]
    ),
    new Recipe(
      'Schnitzel',
      'Flattened meat with breadcrums',
      'https://favorflav.com/images/shutterstock_669627406.jpg',
      [
        new Ingredient('Pork meat (gr)', 300),
        new Ingredient('Breadcrumbs (gr)', 50),
        new Ingredient('French fries', 30),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // Slice copies the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
