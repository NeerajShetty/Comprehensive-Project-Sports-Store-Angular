import { Component, OnInit } from '@angular/core';
import { customer } from 'src/shared/Model/customer';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from "src/app/auth/auth.service"
import { SessionStorageStrategy } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {

  customer:customer = new customer()
  form!: FormGroup;
  constructor(
    public service:AuthService,
    public localstorageservice:SessionStorageStrategy,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required])
    });
  }

  submit(){
    this.customer.email =this.form.value.email;
    this.service.login(this.customer).subscribe(res=>{
      console.log(res);
      if(res == null){
        
        alert('inavalid credentials')
      }  
      else{
        this.localstorageservice.set("user",res)
        this.router.navigate(["user/item"]);
      }
    });
    console.log(this.customer);
  }

}
