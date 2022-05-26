import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipedetailComponent } from "./Features/recipedetail/recipedetail.component";
import { RecipeEditComponent } from "./Features/recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./Features/recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./Features/recipes/recipes.component";
import { ShoppinglistComponent } from "./Features/shoppinglist/shoppinglist.component";

const appRoutes: Routes = [
  {path: '', redirectTo : '/recipe', pathMatch: 'full'},
  {path: 'recipe', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':index', component: RecipedetailComponent },
    {path: ':index/edit', component: RecipeEditComponent},
  ] },
  {path: 'shopping-list', component: ShoppinglistComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:  [RouterModule]
})
export class AppRoutingModule{


}
