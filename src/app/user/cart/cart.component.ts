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
    this.stratergy.get("cart").subscribe(res=>{
      this.cart = res
    })
  }
}
