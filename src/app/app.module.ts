import { LoggingService } from './logging.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /** cargados con lazy load */
    // RecipesModule,
    // ShoppingListModules,
    // AuthModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],

  // only for version under 9 or older
  // ,
  // entryComponents:[
  //   AlertComponent
  // ]
  providers: [LoggingService],
})
export class AppModule {}
