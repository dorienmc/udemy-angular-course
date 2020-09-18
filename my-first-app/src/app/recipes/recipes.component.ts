import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] // Automatically provides this to all sub components as well
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
