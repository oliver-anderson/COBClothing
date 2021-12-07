import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './store/item.model';
import { Cart } from './cart/cart.model';

const itemUrl = 'http://localhost:8080/api/item';
const cartUrl = 'http://localhost:8080/api/cart';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //item API calls
  getItem(id: any): Observable<Item> {
    return this.http.get(`${itemUrl}/${id}`);
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(itemUrl);
  }

  //cart API calls
  populateCart(id: any): Observable<Cart> {
    return this.http.get(`${cartUrl}/${id}`);
  }

  getAllCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartUrl);
  }

  createCart(data: any): Observable<any> {
    return this.http.post(cartUrl, data);
  }

  deleteAllCarts(): Observable<any> {
    return this.http.delete(cartUrl);
  }
}
