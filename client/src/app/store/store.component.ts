import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
/*import { StoreService } from './store.service';
import { CartService } from '../cart/cart.service';*/
import { DataService } from '../data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: []
})
export class StoreComponent implements OnInit {

  items?: Item[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.dataService.getAllItems()
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
