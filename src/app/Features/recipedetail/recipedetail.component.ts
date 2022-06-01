import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/Model/recipe.model';
import { RecipeService } from 'src/app/Service/recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService : RecipeService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['index'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onIngredientToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe'])

  }

}
