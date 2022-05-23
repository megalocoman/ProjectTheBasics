import { Recipe } from './../../../Model/recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/Service/recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {


  recipes: Recipe[];

  constructor(private provide : RecipeService) {

  }

  ngOnInit(): void {
    this.recipes = this.provide.getRecipes();
  }



}
