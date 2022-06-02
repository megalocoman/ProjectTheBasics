import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "src/app/directives/data-storage.service";
import { Recipe } from "src/app/Model/recipe.model";
import { RecipeService } from "src/app/Service/recipe.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{

constructor(private dataStoreService :DataStorageService, private recipeService: RecipeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {

    const recipes = this.recipeService.getRecipes();

    if(recipes.length ===0){
      return this.dataStoreService.fetchRecipe();
    }
    return recipes;

  }

}
