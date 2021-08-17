import { Component } from '@angular/core';

// 構成を宣言する
@Component({
  selector: 'my-app',
  template: `
    <form #myForm="ngForm">
      <h4>好きな動物を選んでください(ラジオボタン)</h4>
      <ng-container *ngFor="let item of data; index as i">
        <label>
          <input type="radio" name="animal"
            [(ngModel)]="selected"
            [value]="item.value" [checked]="selected == item.value"
            (change)="show(i)">{{item.label}}
        </label><br />
        </ng-container>
        <h4>好きな動物を選んでください(チェックボックス)</h4>
        <ng-container *ngFor="let item of data; index as i">
          <label>
            <input type="checkbox" name="animal{{i}}"
              [(ngModel)]="data[i].selected"
              [value]="item.value"
              (change)="show2()">{{item.label}}
          </label><br />
        </ng-container>
        <select name="animal" [(ngModel)]="selected" (change)="show3()">
          <option value="">ペットを選択してください</option>
          <option *ngFor="let item of data"
            [value]="item.value" [disabled]="item.disabled"
            [selected]="item.value == selected">{{item.value}}
          </option>
        </select>
    </form>
  `
})

// クラス名
export class AppComponent  {
  selected = 'hamster';
  data = [
    {label: '犬', value: 'dog', selected: false, disabled: false},
    {label: '猫', value: 'cat', selected: false, disabled: false},
    {label: 'ハムスター', value: 'hamster', selected: false, disabled: false},
    {label: '金魚', value: 'fish', selected: false, disabled: false},
    {label: '亀', value: 'turtle', selected: false, disabled: false},
  ];

  // ラジオボタンの変更時に現在地をログに出力
  show(i: number) {
    console.log('現在地（ラベル）：' + this.data[i].label);
    console.log('現在地（値）：' + this.selected);
  }
  show2() {
    console.log(this.data);
  }
  show3() {
    console.log('現在地：' + this.selected);
  }
}

// 片方向バインディング [] ()
// 双方向バインディング [()]
