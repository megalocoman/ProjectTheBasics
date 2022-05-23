import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Model/recipe.model';
import { RecipeService } from 'src/app/Service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipes);
  }

}
