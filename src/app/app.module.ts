import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListServiceService } from './Service/shopping-list-service.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './Service/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipesModule } from './Features/recipes/recipes.module';
import { ShoppingListModules } from './Features/shoppinglist/shopping-edit.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModules,
    SharedModule
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
