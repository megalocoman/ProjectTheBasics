import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropdownDirective } from "../directives/dropdown.directive";
import { AlertComponent } from "./alert/alert.component";
import { loadingspinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder.directive";

@NgModule({
  declarations: [
    DropdownDirective,
    loadingspinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ], imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective,
    loadingspinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    CommonModule
  ]
})
export class SharedModule { }
