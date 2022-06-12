import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { CanDeactivateGuard } from "./recipes/recipe-edit/can-deactivate.guard.service";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
const appRoute: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: "full"},
    {
         path: 'recipes', 
         component: RecipesComponent,
         children:[
            {path: '', component: RecipeStartComponent, pathMatch: "full"},
            {path: 'new', component: RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent, canDeactivate: [CanDeactivateGuard]}
         ]
    },
    { path: 'shopping-list', component: ShoppingListComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule {}