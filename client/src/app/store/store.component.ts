import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { Item } from './item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [StoreService]
})
export class StoreComponent implements OnInit {
  items: Item[];
  item: Item;
  product: string;
  color: string;
  size: string;
  price: number;

  constructor(private storeService: StoreService) { }

  ngOnInit() {

    this.storeService.getItem()
      .subscribe(items => this.items = items);
  }

}
