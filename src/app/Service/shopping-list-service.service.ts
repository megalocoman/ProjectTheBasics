import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../Model/ingredient.model';

export class ShoppingListServiceService {

  startedEditing= new Subject<number>();

  ingredientChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[]= [
    new Ingredient('Apple', 5),
    new Ingredient('Oreanges', 8)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();

  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){

    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());

  }
}
