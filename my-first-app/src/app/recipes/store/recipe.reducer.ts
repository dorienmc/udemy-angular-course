import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import * as RecipesAction from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes : [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ]
};

export function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case RecipesAction.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    default:
      return state;
  }
}
