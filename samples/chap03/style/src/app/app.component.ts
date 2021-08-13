import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div [style.background-color]="bcolor"
      [style.color]="'blue'"
      [style.font-size.%]="size">WINGSプロジェクト</div>
  `

  // 式の値によって、オンオフを切り替えたい場合
  /*
  template: `
    <div [style.background-color]="bcolor ? '#0ff' : ''">
      WINGSプロジェクト</div>
  `
  */
})
export class AppComponent {
  bcolor = 'red';
  size = '150';
  // bcolor = true;
}