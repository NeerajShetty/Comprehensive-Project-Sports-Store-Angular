import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  form!: FormGroup;
  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  submit(){
      console.log("pressed submit");
      if(this.form.value.email == "admin" && this.form.value.password == "admin"){
        console.log("pressed submit");
        sessionStorage.setItem("admin",this.form.value.email);
        this.router.navigate(["/customer/index"]);  
      }  
      else{
        alert('inavalid credentials')
      }
    }
}
