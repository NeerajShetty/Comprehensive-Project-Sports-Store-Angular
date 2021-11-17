import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component';
import { CustomerviewComponent } from './customer/customerview/customerview.component';
import { CustomercreateComponent } from './customer/customercreate/customercreate.component';
import { CustomerupdateComponent } from './customer/customerupdate/customerupdate.component';
import { CustomerService } from './customer/customer.service';

import { HttpClientModule } from '@angular/common/http';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'; 
import {MatTableModule} from '@angular/material/table';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ItemindexComponent } from './item/itemindex/itemindex.component';
import { ItemviewComponent } from './item/itemview/itemview.component';
import { ItemcreateComponent } from './item/itemcreate/itemcreate.component';
import { ItemupdateComponent } from './item/itemupdate/itemupdate.component';
;import { ItemService } from './item/item.service';
import { OrderindexComponent } from './order/orderindex/orderindex.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerIndexComponent,
    CustomerviewComponent,
    CustomercreateComponent,
    CustomerupdateComponent,
    ItemindexComponent,
    ItemviewComponent,
    ItemcreateComponent,
    ItemupdateComponent,
    OrderindexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatTableModule
  ],
  providers: [CustomerService,ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
