import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppinglistComponent } from './Features/shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './Features/shoppinglist/shoppingedit/shoppingedit.component';
import { RecipedetailComponent } from './Features/recipes/recipedetail/recipedetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListServiceService } from './Service/shopping-list-service.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './Service/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { loadingspinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { RecipesModule } from './Features/recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipedetailComponent,
    DropdownDirective,
    AuthComponent,
    loadingspinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule
  ],
  providers: [ShoppingListServiceService, RecipeService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
  // only for version under 9 or older
  // ,
  // entryComponents:[
  //   AlertComponent
  // ]
})
export class AppModule { }
