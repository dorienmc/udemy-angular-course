import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Chili Con Carne', 'Beans with meat', 'https://www.24kitchen.nl/files/styles/social_media_share/public/2019-10/shutterstock_1192492630.jpg?itok=RCqTgyci'),
    new Recipe('Schnitzel', 'Flattened meat with breadcrums', 'https://favorflav.com/images/shutterstock_669627406.jpg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  onRecipeSelected(recipe: Recipe): void {
    this.selectedRecipe.emit(recipe);
  }

}
