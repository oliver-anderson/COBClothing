import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model';
import { Item } from '../store/item.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {

  carts?: Cart[];
  cartItems?: Item[];
  cartItem?: Item;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.retrieveCart();
    this.populateCartItems(1);
  }

  populateCartItems(id): void {
    this.dataService.populateCart(id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
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
