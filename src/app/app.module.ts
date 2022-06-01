import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './Features/recipes/recipes.component';
import { RecipelistComponent } from './Features/recipes/recipelist/recipelist.component';
import { RecipeItemComponent } from './Features/recipes/recipelist/recipe-item/recipe-item.component';
import { ShoppinglistComponent } from './Features/shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './Features/shoppinglist/shoppingedit/shoppingedit.component';
import { RecipedetailComponent } from './Features/recipedetail/recipedetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListServiceService } from './Service/shopping-list-service.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './Features/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './Features/recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './Service/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipeItemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipedetailComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListServiceService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
