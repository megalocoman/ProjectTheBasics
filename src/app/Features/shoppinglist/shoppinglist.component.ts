import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Model/ingredient.model';
import { RecipeService } from 'src/app/Service/recipe.service';
import { ShoppingListServiceService } from 'src/app/Service/shopping-list-service.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredients: Ingredient[] =[];

  constructor(private sLService: ShoppingListServiceService) { }

  ngOnInit(): void {

    this.ingredients = this.sLService.getIngredients();
    this.sLService.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      });
  }
}
