import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { SessionStorageStrategy } from 'ngx-webstorage';
import { SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sportsStore';
  username!:string |undefined
  constructor(
    public stratergy:SessionStorageStrategy
  ){}

  authenticated(){
    if(sessionStorage.length != 0){
       this.stratergy.get("user").subscribe(res=>{
        this.username = res.name;
       });
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.clear();
  }

  isadmin(){
    return sessionStorage.key(0) == "admin";
  }

}
