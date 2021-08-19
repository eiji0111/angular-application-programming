import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'detail-book',
  template: `
    <ul *ngIf="item">
      <li>IBSNコード：{{item.isbn}}</li>
      <li>書名：{{item.title}}</li>
      <li>価格：{{item.price | number}}円</li>
      <li>出版社：{{item.publisher}}</li>
    </ul>
  `
})

export class DetailsComponent {
  @Input() item: Book;
}