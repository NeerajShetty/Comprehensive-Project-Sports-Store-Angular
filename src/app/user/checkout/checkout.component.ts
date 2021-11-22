import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageStrategy, SessionStorageStrategy,LocalStorage} from 'ngx-webstorage';
import { order } from 'src/shared/Model/order';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  placedorder:order = new order();
  sum = 0;
  form!: FormGroup;
  constructor(
    public localstratergy:LocalStorageStrategy,
    public sessionstratergy:SessionStorageStrategy,
    public userservice:UserService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.localstratergy.get("cart").subscribe(res=>{
      this.placedorder.item = res
      console.log(this.placedorder.item)
      
    }
    )

    this.sessionstratergy.get("user").subscribe(res=>{
      this.placedorder.customer = res;
    })
    this.DateofOrder();
    this.totalprice();
   
 
    this.form = new FormGroup({
      
      paymentmethod: new FormControl(''),
    });
  }
 


  DateofOrder()
  {
    var today=new Date();
    var dd=String(today.getDate());
    var mm=String(today.getMonth()+1);
    var yyyy=String(today.getFullYear());
   this.placedorder.orderDate=mm+'/'+dd+'/'+yyyy;
      
       console.log(this.placedorder.orderDate);

  }
  submit(){
    console.log("placing order at component");
    this.placedorder.paymentMode = this.form.value.paymentmethod;
    localStorage.clear();
    this.userservice.placeOrder(this.placedorder).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl("customer/order/"+this.placedorder.customer.id);
    });
  }

  totalprice(){
    console.log(this.sum)
    this.placedorder.item.forEach(element => {
      this.sum += element.price;
    });
  }

}
