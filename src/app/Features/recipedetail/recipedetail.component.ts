import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Model/recipe.model';
import { RecipeService } from 'src/app/Service/recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recipeService : RecipeService ) { }

  ngOnInit(): void {
  }

  onIngredientToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);

  }

}
