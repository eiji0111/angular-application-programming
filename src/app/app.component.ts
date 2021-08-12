import { Component } from '@angular/core';

// 構成を宣言する
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{member?.name}}</h1>`,
})

// クラス名
export class AppComponent  {
  member = {
    name: '田中太郎',
    age: 26,
  }
}
