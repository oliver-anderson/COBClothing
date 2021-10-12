import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
/*import { Item } from './item';*/

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  /*items: Item[];
  item: Item;
  product: string;
  color: string;
  size: string;
  price: number;*/

  constructor(/*private cartService: CartService*/) { }

  ngOnInit() {

    /*this.storeService.getCart()
      .subscribe(items => this.items = items);*/
  }

}
