import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../Model/ingredient.model";
import { Recipe } from "../Model/recipe.model";
import { ShoppingListServiceService } from "./shopping-list-service.service";

@Injectable()
export class RecipeService {

  // recipeSelected = new Subject<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('Test recipe A', 'Test Test' ,
     'http://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg',
     [
       new Ingredient('peepee', 1000),
       new Ingredient('poopoo', 150)
     ]),
     new Recipe('Test recipe B', 'Test Test' ,
     'http://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg',
     [
      new Ingredient('kkkk', 10),
      new Ingredient('qqqqq', 15)
     ])
  ];

  constructor(private slService: ShoppingListServiceService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    // console.log(this.getRecipes[index]);

     return   this.recipes[index];;
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
