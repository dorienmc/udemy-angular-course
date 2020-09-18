import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService , private route: ActivatedRoute) {}

  ngOnInit(): void {
    const Name = this.route.snapshot.params.name;
    this.recipe = new Recipe(Name, 'todo', '', []);
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
