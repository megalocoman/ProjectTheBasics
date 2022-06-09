import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipeService } from "./Service/recipe.service";
import { ShoppingListServiceService } from "./Service/shopping-list-service.service";

@NgModule({
  providers: [
    ShoppingListServiceService,
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ]
})
export class CoreModule {

}
