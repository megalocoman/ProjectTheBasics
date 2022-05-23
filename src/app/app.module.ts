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
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListServiceService } from './Service/shopping-list-service.service';

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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
