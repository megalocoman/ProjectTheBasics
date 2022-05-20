import { Recipe } from './../../../Model/recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
  new Recipe('Test recipe A', 'Test Test' ,
   'http://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg'),
   new Recipe('Test recipe B', 'Test Test' ,
   'http://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg')

];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
