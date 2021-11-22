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
import{ NgxWebstorageModule, SessionStorageService} from 'ngx-webstorage'

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'; 
import {MatTableModule} from '@angular/material/table';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ItemindexComponent } from './item/itemindex/itemindex.component';
import { ItemviewComponent } from './item/itemview/itemview.component';
import { ItemcreateComponent } from './item/itemcreate/itemcreate.component';
import { ItemupdateComponent } from './item/itemupdate/itemupdate.component';
import { ItemService } from './item/item.service';
import { OrderindexComponent } from './order/orderindex/orderindex.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { SessionStorageStrategy } from 'ngx-webstorage';
import { RegisterComponent } from './auth/register/register.component';

import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { AdminloginComponent } from './auth/adminlogin/adminlogin.component';




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
    OrderindexComponent,
    LoginComponent,
    RegisterComponent,
    AdminloginComponent
    
   
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
    MatTableModule,
    NgxWebstorageModule.forRoot(),
    UserModule,
    UserRoutingModule,
   
  ],
  providers: [CustomerService,ItemService,AuthService,SessionStorageService,SessionStorageStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
