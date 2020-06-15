import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {ProductComponent} from './product/product.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'produkte', component: ProductComponent},
  {path: 'inhaltsstoffe', component: IngredientsComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
