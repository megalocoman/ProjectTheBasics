import { Component } from '@angular/core';
import { DataStorageService } from 'src/app/directives/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private httpRequestData: DataStorageService){}

  onSaveData(){
    this.httpRequestData.storeRecipes();

  }

  onFetchData(){
    this.httpRequestData.fetchRecipe().subscribe();
  }



}
