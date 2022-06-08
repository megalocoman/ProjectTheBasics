import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesroutingModule } from "./recipe-router.module";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipedetailComponent } from "./recipedetail/recipedetail.component";
import { RecipeItemComponent } from "./recipelist/recipe-item/recipe-item.component";
import { RecipelistComponent } from "./recipelist/recipelist.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipelistComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipedetailComponent,
    RecipeEditComponent
  ],
  imports: [RouterModule, SharedModule, ReactiveFormsModule, RecipesroutingModule],
  exports: []
})
export class RecipesModule {

}
