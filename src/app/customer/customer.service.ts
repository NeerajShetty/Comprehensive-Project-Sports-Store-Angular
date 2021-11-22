import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { customer } from 'src/shared/Model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiURL = "https://localhost:44359/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
    ) 
    { }
    getAll(): Observable<customer[]> {
      return this.httpClient.get<customer[]>(this.apiURL + 'customers') 
      .pipe( 
        catchError<customer[],Observable<customer[]>>(this.errorHandler) 
      )  
    }

    create(post:customer): Observable<customer> {
      return this.httpClient.post(this.apiURL + 'customers', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError<any,any>(this.errorHandler) 
      )
    }

    find(id:number): Observable<customer> {
      return this.httpClient.get(this.apiURL + 'customers/' + id) 
      .pipe( 
        catchError<any,any>(this.errorHandler)
      ) 
    } 

    update(id:number, post:customer): Observable<customer> {  
      post.id = id;
      return this.httpClient.put(this.apiURL + 'customers/' + id, JSON.stringify(post), this.httpOptions) 
      .pipe( 
        catchError<any,any>(this.errorHandler)  
      )
    }

    delete(id:number){
      console.log(this.apiURL + 'customers/' + id);
      return this.httpClient.delete(this.apiURL + 'customers/' + id, this.httpOptions) 
      .pipe(
        catchError(this.errorHandler)
      ) 
    }

    errorHandler(error:any) {
      let errorMessage = ''; 
      if(error.error instanceof ErrorEvent) {  
        errorMessage = error.error.message; 
      } else {  
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; 
      } 
      return throwError(errorMessage);  
   }
}
