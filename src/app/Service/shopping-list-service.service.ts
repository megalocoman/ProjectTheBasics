import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../Model/ingredient.model';

export class ShoppingListServiceService {

  ingredientChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[]= [
    new Ingredient('Apple', 5),
    new Ingredient('Oreanges', 8)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();

  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){

    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
