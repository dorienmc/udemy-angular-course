import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Chili Con Carne',
      'Beans with meat',
      'https://www.24kitchen.nl/files/styles/social_media_share/public/2019-10/shutterstock_1192492630.jpg?itok=RCqTgyci'
    ),
    new Recipe(
      'Schnitzel',
      'Flattened meat with breadcrums',
      'https://favorflav.com/images/shutterstock_669627406.jpg'
    ),
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // Slice copies the array
  }
}
