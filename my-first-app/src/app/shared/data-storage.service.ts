import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';

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
    this.http.get<Recipe[]>(this.rootUrl + 'recipes.json')
      .pipe(map( recipes => {
        // Firebase doesn't store empty arrays, hence we have to put them bac
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }))
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
