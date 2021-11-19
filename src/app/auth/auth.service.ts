import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from 'src/shared/Model/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = "https://localhost:44359/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private httpClient: HttpClient
  ) { }
  login(post:customer):Observable<any>{
    return this.httpClient.post(this.apiURL + 'Authentication', JSON.stringify(post), this.httpOptions)
  }

}
