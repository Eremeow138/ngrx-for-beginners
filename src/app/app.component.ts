import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import {
  clear,
  countSelector,
  decrease,
  increase,
  updatedAtSelector,
} from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count$ = this.store.select(countSelector);

  public cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));

  public updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) {}

  public increase(): void {
    this.store.dispatch(increase());
  }
  public decrease(): void {
    this.store.dispatch(decrease());
  }
  public clear(): void {
    this.store.dispatch(clear());
  }
}
