import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model';
import { Item } from '../store/item.model';
//import { CartService } from './cart.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {

  carts?: Cart[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.retrieveCart();
  }

  retrieveCart(): void {
    this.dataService.getAllCarts()
      .subscribe(
        data => {
          this.carts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removeAllCarts(): void {
    this.dataService.deleteAllCarts()
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
