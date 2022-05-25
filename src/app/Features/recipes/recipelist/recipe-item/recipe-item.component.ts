import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Model/recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes: Recipe;
  //  recipes: Recipe;
  @Input() index: number;


  constructor() { }

  ngOnInit(): void {

  }

  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipes);
  // }

}
