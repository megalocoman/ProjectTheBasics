import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoggingService } from 'src/app/logging.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { shoppingListroutingModule } from './shopping-list-router.module';
import { ShoppingeditComponent } from './shoppingedit/shoppingedit.component';
import { ShoppinglistComponent } from './shoppinglist.component';

@NgModule({
  declarations: [ShoppinglistComponent, ShoppingeditComponent],
  imports: [RouterModule, SharedModule, FormsModule, shoppingListroutingModule],
  exports: [],
  providers: [LoggingService],
})
export class ShoppingListModules {}
