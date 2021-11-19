import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ItemindexComponent } from './itemindex/itemindex.component';
import { UserService } from './user.service';

import {MatGridListModule} from '@angular/material/grid-list';
import { CartComponent } from './cart/cart.component';
import { LocalStorageStrategy } from 'ngx-webstorage';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ItemindexComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatGridListModule,
    FormsModule,ReactiveFormsModule
  ],
  providers:[UserService,LocalStorageStrategy]
})
export class UserModule { }
