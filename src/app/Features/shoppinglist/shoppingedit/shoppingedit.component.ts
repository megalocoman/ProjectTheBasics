import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Model/ingredient.model';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) nameInputReference: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputReference: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName= this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;
    const newIngredient =  new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
