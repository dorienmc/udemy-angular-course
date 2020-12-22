import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Guacamole',
      'Snij klein, meng, eventueel met een staafmixer. Serveer direct.',
      'https://www.simplyrecipes.com/wp-content/uploads/2018/07/Guacamole-LEAD-1.jpg',
      [
        new Ingredient('Avocado', 2),
        new Ingredient('Kleine rode ui', 1),
        new Ingredient('Kleine trostomaat', 1),
        new Ingredient('Pimenton (tl)', 1),
        new Ingredient('Komijnpoeder (tl)', 0.33),
        new Ingredient('Limoen (sap)', 1),
      ]
    ),
    new Recipe(
      'Lui Dip',
      "Ga op een vrijdag naar Groenlo, koop loempia's (zoveel je wil) met (zoet zure) saus. Dip de loempia in de saus en genieten maar",
      'https://images.vrt.be/dako2017_1600s_j75/2020/02/06/8e2d8511-48f0-11ea-aae0-02b7b76bf47f.jpg',
      [new Ingredient('Loempia', 2), new Ingredient('Zoetzure saus', 1)]
    ),
    new Recipe(
      'Hete dip',
      "Ga op zaterdag naar de markt in Enschede, koop loempia's (zoveel je wil) met sambal. Smeer flink wat sambal op de loempia's en eet smakelijk! ",
      'https://smaakmenutie.nl/wp-content/uploads/2018/02/Indische-loempias-8-585x585.jpg',
      [new Ingredient('Loempia', 2), new Ingredient('Sambal', 1)]
    ),
    new Recipe(
      'Pesto',
      'Met de staafmixer "blitsen" en ready to go',
      'https://www.zoetrecepten.nl/wp-content/uploads/2015/12/IMG_0211-1.jpg',
      [
        new Ingredient('Knoflook teentje', 1),
        new Ingredient('Ongezouten pistaschenoten (gr)', 50),
        new Ingredient('Platte peterselie (handje)', 1),
        new Ingredient('Basilicum (handje)', 1),
        new Ingredient('Oude kaas (gr)', 50),
        new Ingredient('Olijfolie (el)', 1),
      ]
    ),
    new Recipe(
      'Tzatziki',
      'chil en rasp de komkommer en knijp het vocht er uit. Knijp de knoflook fijn, en meng die met de dille en de komkommer door de yoghurt. Laat een nacht in de koeling staan om de smaken in te laten trekken.',
      'https://www.culy.nl/wp-content/uploads/2013/06/Stock-Griekse-tzatziki.jpg',
      [
        new Ingredient('Volle Griekse Yoghurt (10%)', 1),
        new Ingredient('Komkommer', 1),
        new Ingredient('Dillepuntjes (handje)', 1),
      ]
    ),
    new Recipe(
      'Tahini saus',
      'Blitsen en klaar',
      'https://www.super-human.be/src/Frontend/Files/Recipes/images/1200x800/tahini-1590587542.jpg',
      [
        new Ingredient('Tahini (ml)', 150),
        new Ingredient('Water (ml)', 150),
        new Ingredient('Citroensap (ml)', 80),
        new Ingredient('Platte peterselie (handvol)', 1),
        new Ingredient('Zout (tl)', 1),
        new Ingredient('Knoflook teentje', 1),
      ]
    ),
    new Recipe(
      'Simpele aïoli',
      'Knijp de tenen (of de hele bol 😇) knoflook, meng door de mayonaise.',
      'https://static.ah.nl/static/product/AHI_434d50313236393134_4_LowRes_JPG.JPG?options=399,q85',
      [new Ingredient('Mayonaise', 1), new Ingredient('Knoflook', 1)]
    ),
    new Recipe(
      'Iets moeilijkere aïoli',
      ' Doe eigeel, citroensap en knoflook (naar smaak) in een hoge mengkan. Zet de staafmixer op het eigeel, giet de olie er op en start de staafmixer. Als er saus begint te ontstaan de staafmixer rustig naar boven halen.',
      'https://www.deheerlijkheid.com/wp-content/uploads/2020/04/Aioli.jpg',
      [
        new Ingredient('Eigeel', 1),
        new Ingredient('Goede neutrale olie (zonnebloem, koolzaad) (ml)', 200),
        new Ingredient('Citroen (sap)', 1),
        new Ingredient('Knoflook', 1),
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

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
