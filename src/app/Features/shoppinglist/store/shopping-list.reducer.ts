import * as ShoppingListActions from './shopping-list.actions';
import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/Model/ingredient.model';

const initialState = {
  ingredient: [new Ingredient('Apple', 5), new Ingredient('Oreanges', 8)],
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredient: [...state.ingredient, action.payload],
      };
  }
}
