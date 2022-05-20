import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Model/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredients: Ingredient[]= [
    new Ingredient('Apple', 5),
    new Ingredient('Oreanges', 8)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient){

    this.ingredients.push(ingredient);
    console.log(ingredient.name);
  }

}
