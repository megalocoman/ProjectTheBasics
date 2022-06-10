import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppinglistComponent } from './shoppinglist.component';

const routes: Routes = [{ path: '', component: ShoppinglistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class shoppingListroutingModule {}
