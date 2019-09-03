import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IProduct } from '../models/product';
import { IStore } from '../models/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<IStore>) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  cart: IProduct[] = [];

  ngOnInit() {}
}
