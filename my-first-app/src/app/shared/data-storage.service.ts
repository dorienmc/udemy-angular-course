import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';

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
}
