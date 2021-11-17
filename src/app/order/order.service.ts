
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { order } from 'src/shared/Model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiURL = "https://localhost:44359/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(id:number): Observable<order[]> {
    return this.httpClient.get(this.apiURL + 'orders/' + id) 
    .pipe( 
      catchError<any,any>(this.errorHandler)
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
