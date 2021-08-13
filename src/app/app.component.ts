import { Component } from '@angular/core';

// 構成を宣言する
@Component({
  selector: 'my-app',
  template: `
    <form>
      <label for="name">名前: </label>
      <input id="name" name="name" type="text" [(ngModel)]="myName" value="初期値" />
      <div>こんにちは、{{myName}}さん！</div>
    </from>
  `,
})

// クラス名
export class AppComponent  {
  myName = "山田";
}

// 片方向バインディング [] ()
// 双方向バインディング [()]
