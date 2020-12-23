import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  rootUrl = 'https://udemy-ng-database-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient, private recipeService: RecipeService) {

  }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.rootUrl + 'recipes.json', recipes).subscribe( response => {
        console.log(response);
      }
    );
  }

  fetchRecipes(): void {
    this.http.get<Recipe[]>(this.rootUrl + 'recipes.json').subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
