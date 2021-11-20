import { Component, OnInit } from '@angular/core';
import { item } from 'src/shared/Model/item';
import { CartComponent } from '../cart/cart.component';
import { UserService } from '../user.service';
import { LocalStorageStrategy } from 'ngx-webstorage';

@Component({
  selector: 'app-itemindex',
  templateUrl: './itemindex.component.html',
  styleUrls: ['./itemindex.component.css']
})
export class ItemindexComponent implements OnInit {

  items!:item[]
  cart:item [] = new Array();

  constructor(
    public userservice:UserService,
    public statergy:LocalStorageStrategy
  ) { }

  ngOnInit(): void {
    this.userservice.getAll().subscribe(data=>{
      this.items = data;
      console.log(this.items);
    })
  }
  addtocart(item:item){
    this.cart.push(item)
    this.statergy.set("cart",this.cart);
  }
  isauthenticated(){
    return sessionStorage.length != 0
  }

}
