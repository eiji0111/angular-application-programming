import { Component } from '@angular/core';
// 書籍オブジェクトをインポート
import { Book } from './book';

// 構成を宣言する
@Component({
  selector: 'my-app',
  template: `
    <div>
      <span *ngFor="let b of books">
        [<a href="#" (click)="onclick(b)">{{ b.title }}</a>]
      </span>
    </div>
    <hr />
    <detail-book [item]="selected"></detail-book>
  `
})

// クラス名
export class AppComponent  {
  // リスト側で選択された書籍
  selected: Book;
  // 書籍情報を準備
  books = [
    {
      isbn: '978-4-7741-8411-1',
      title: '改訂新版JavaScript本格入門',
      price: 2980,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7980-4853-6',
      title: 'はじめてのAndroidアプリ開発 第2版',
      price: 3200,
      publisher: '秀和システム',
    },
  ]

  // リンククリック時に選択された書籍情報をselectedプロパティに保存
  onclick(book: Book) {
    this.selected = book;
  }
}

// 片方向バインディング [] ()
// 双方向バインディング [()]
