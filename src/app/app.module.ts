import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RecipesModule } from './Features/recipes/recipes.module';
import { ShoppingListModules } from './Features/shoppinglist/shopping-edit.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModules,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
  // only for version under 9 or older
  // ,
  // entryComponents:[
  //   AlertComponent
  // ]
})
export class AppModule { }
