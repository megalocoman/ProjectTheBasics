import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Model/ingredient.model';
import { ShoppingListServiceService } from 'src/app/Service/shopping-list-service.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) nameInputReference: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputReference: ElementRef;


  constructor(private slService : ShoppingListServiceService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName= this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;
    const newIngredient =  new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);

  }

}
