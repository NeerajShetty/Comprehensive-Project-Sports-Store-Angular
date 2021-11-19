import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemindexComponent } from './itemindex/itemindex.component';

const routes: Routes = [
  {path:'user/item',component:ItemindexComponent},
  {path:'user/cart',component:CartComponent},
  {path:'user/cart/checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
