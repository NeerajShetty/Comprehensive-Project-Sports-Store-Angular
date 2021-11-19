import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomercreateComponent } from './customer/customercreate/customercreate.component';
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component';
import { CustomerupdateComponent } from './customer/customerupdate/customerupdate.component';
import { OrderindexComponent } from './order/orderindex/orderindex.component';

import { ItemcreateComponent } from './item/itemcreate/itemcreate.component';
import { ItemindexComponent } from './item/itemindex/itemindex.component';
import { ItemupdateComponent } from './item/itemupdate/itemupdate.component';
import { ItemviewComponent } from './item/itemview/itemview.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  //{path:'',redirectTo:'customer/index',component:CustomerIndexComponent},
  {path:'customer/index',component:CustomerIndexComponent},
  {path:'customer/order/:id',component:OrderindexComponent},
  {path:'customer/create',component:CustomercreateComponent},
  {path:'customer/update/:id',component:CustomerupdateComponent},
  {path:'item/index',component:ItemindexComponent},
  {path:'item/view/:id',component:ItemviewComponent},
  {path:'item/create',component:ItemcreateComponent},
  {path:'item/update/:id',component:ItemupdateComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
