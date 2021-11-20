import { Component, OnInit } from '@angular/core';
import { item } from 'src/shared/Model/item';
import { LocalStorageStrategy } from 'ngx-webstorage';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 
  cart!:item[]
  constructor(
    public stratergy:LocalStorageStrategy
  ) { }

  ngOnInit(): void {
    this.cart=[];
    this.stratergy.get("cart").subscribe(res=>{
      this.cart = res
    })
  }
  iscartEmpty(){
    if(this.cart.length==0){
      return true;
    }
    return false;
  }
  deleteItem(item:item){
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    this.stratergy.set('cart',this.cart);
  }
}
