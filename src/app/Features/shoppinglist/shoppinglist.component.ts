import { LoggingService } from './../../logging.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/Model/ingredient.model';

import { ShoppingListServiceService } from 'src/app/Service/shopping-list-service.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingrChangedSub: Subscription;

  constructor(
    private sLService: ShoppingListServiceService,
    private loggingService: LoggingService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.sLService.getIngredients();
    this.ingrChangedSub = this.sLService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog('log shopping list');
  }

  ngOnDestroy(): void {
    this.ingrChangedSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.sLService.startedEditing.next(index);
  }
}
