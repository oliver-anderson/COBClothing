import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

/*
  //retrieve items
  getCart() {
    return this.http.get<Item[]>('http://localhost:3000/api/cart').pipe(
      map(res => res)
    );
  }

  //add items
  addItem(newItem) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Item[]>('http://localhost:3000/api/cart', newItem,{headers:headers}).pipe(
      map(res => res)
    );
  }

  //delete items
  deleteItem(id) {
    return this.http.delete<Item[]>('http://localhost:3000/api/cart/'+id).pipe(
      map(res => res)
    );
  }
*/
}
