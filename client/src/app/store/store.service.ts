import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }


  //retrieve items
  getItem() {
    return this.http.get<Item[]>('http://localhost:3000/api/items').pipe(
      map(res => res)
    );
  }

  //add items
  addItem(newItem) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/items', newItem,{headers:headers}).pipe(
      map(res => res)
    );
  }

  //delete items
  deleteItem(id) {
    return this.http.delete('http://localhost:3000/api/items/'+id).pipe(
      map(res => res)
    );
  }

}
