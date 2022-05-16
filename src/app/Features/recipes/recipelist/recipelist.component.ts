import { Recipe } from './../../../Model/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

recipes : Recipe[] = [
  new Recipe('Test recipe', 'Test Test' ,
   'http://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg'),
   new Recipe('Test recipe', 'Test Test' ,
   'http://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg')

];
  constructor() { }

  ngOnInit(): void {
  }

}
