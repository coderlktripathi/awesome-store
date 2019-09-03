import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { IProduct } from '../models/product';
import { IStore } from '../models/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<IStore>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
  }

  items: IProduct[] = [];

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }
}
