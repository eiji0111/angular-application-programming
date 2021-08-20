import { Component, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';

// 構成を宣言する
@Component({
  selector: 'my-app',
  template: `
    <div>
      <label>表示／非表示
        <input type="checkbox" (change)="onchange()" checked />
      </label>
    </div>
    <my-child [time]="current" *ngIf="show"></my-child>
  `
})

// クラス名
export class AppComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  show = true;
  current = new Date();

  // チェックボックス変更時に実行
  onchange() {
    this.show = !this.show;
    this.current = new Date();
  }

  constructor() {
    console.log('constructor');
  }

  // ライフサイクルメソッド
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ndDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

// 片方向バインディング [] ()
// 双方向バインディング [()]
