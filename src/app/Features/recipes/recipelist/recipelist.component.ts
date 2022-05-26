import { Recipe } from './../../../Model/recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/Service/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {


  recipes: Recipe[];

  constructor(private provide : RecipeService, private router: Router, private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.recipes = this.provide.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route, queryParamsHandling: 'preserve' } );
  }

}
