import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/Model/ingredient.model';
import { ShoppingListServiceService } from 'src/app/Service/shopping-list-service.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit,OnDestroy {

  // @ViewChild('nameInput', {static:false}) nameInputReference: ElementRef;
  // @ViewChild('amountInput', {static:false}) amountInputReference: ElementRef;
  @ViewChild('f', {static:false}) signupForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedNumberIndex: number;
  editedItem: Ingredient;

  constructor(private slService : ShoppingListServiceService) {

   }


  ngOnInit(): void {
    this.subscription= this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedNumberIndex = index;
        this.editedItem =this.slService.getIngredient(index);
        this.signupForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onAddItem(){
    // const ingName= this.nameInputReference.nativeElement.value;
    // const ingAmount = this.amountInputReference.nativeElement.value;
    // const newIngredient =  new Ingredient(ingName, ingAmount);
    // this.slService.addIngredient(newIngredient);

  }

  onAddItemForm(){
    const ingName= this.signupForm.value.name;
    const ingAmount=  this.signupForm.value.amount;
    const newIngredient =  new Ingredient(ingName, ingAmount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedNumberIndex, newIngredient);
      this.editMode = false;
    }else{
      this.slService.addIngredient(newIngredient);
    }

    this.signupForm.reset();
  }

  onClear(){
    this.signupForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedNumberIndex)
    this.onClear();
  }

}
