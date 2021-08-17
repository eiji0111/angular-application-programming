import { Component } from '@angular/core';

// 構成を宣言する
@Component({
  selector: 'my-app',
  template: `
    <form #myForm="ngForm">
      <ng-container *ngFor="let item of data; index as i">
        <label>
          <input type="radio" name="animal"
            [(ngModel)]="selected"
            [value]="item.value" [checked]="selected == item.value"
            (change)="show(i)">{{item.label}}
        </label><br />
      </ng-container>
    </form>
  `
})

// クラス名
export class AppComponent  {
  selected = 'hamster';
  data = [
    {label: '犬', value: 'dog'},
    {label: '猫', value: 'cat'},
    {label: 'ハムスター', value: 'hamster'},
    {label: '金魚', value: 'fish'},
    {label: '亀', value: 'turtle'},
  ];

  // ラジオボタンの変更時に現在地をログに出力
  show(i: number) {
    console.log('現在地（ラベル）：' + this.data[i].label);
    console.log('現在地（値）：' + this.selected);
  }
}

// 片方向バインディング [] ()
// 双方向バインディング [()]
