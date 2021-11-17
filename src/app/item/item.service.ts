import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { item } from 'src/shared/Model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiURL = "https://localhost:44359/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<item[]> {
    return this.httpClient.get<item[]>(this.apiURL + 'items') 
    .pipe( 
      catchError<item[],Observable<item[]>>(this.errorHandler) 
    )  
  }

  create(post:item): Observable<item> {
    return this.httpClient.post(this.apiURL + 'items', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError<any,any>(this.errorHandler) 
    )
  }

  find(id:number): Observable<item> {
    return this.httpClient.get(this.apiURL + 'items/' + id) 
    .pipe( 
      catchError<any,any>(this.errorHandler)
    ) 
  } 

  update(id:number, post:item): Observable<item> {  
    post.id = id;
    return this.httpClient.put(this.apiURL + 'items/' + id, JSON.stringify(post), this.httpOptions) 
    .pipe( 
      catchError<any,any>(this.errorHandler)  
    )
  }

  delete(id:number){
    console.log(this.apiURL + 'items/' + id);
    return this.httpClient.delete(this.apiURL + 'items/' + id, this.httpOptions) 
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
