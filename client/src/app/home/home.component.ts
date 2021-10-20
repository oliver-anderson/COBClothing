import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { Item } from '../store/item.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cart: Cart = {
    items: [],
    total: 0,
    active: true
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.saveCart();
  }

  saveCart(): void {
    const data = {
      items: this.cart.items,
      total: this.cart.total,
      active: this.cart.active
    };
    this.dataService.createCart(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
