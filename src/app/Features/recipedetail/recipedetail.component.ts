import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private recipeService : RecipeService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    // const index: number = +this.route.snapshot.params['index'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);

      }
    );


  }

  onIngredientToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);

  }

}
