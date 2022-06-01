import { Recipe } from './../../../Model/recipe.model';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/Service/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {


  recipes: Recipe[];

  subscription : Subscription;

  constructor(private provide : RecipeService, private router: Router, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.subscription =this.provide.recipeChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes
        }
      );
    this.recipes = this.provide.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route, queryParamsHandling: 'preserve' } );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
