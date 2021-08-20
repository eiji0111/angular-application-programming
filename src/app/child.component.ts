import { Component, Input, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
    <p>現在時刻は{{time.toLocaleString()}}</p>
  `
})

export class ChildComponent implements OnChanges,
OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() time: Date;

  constructor() {
    console.log('[child] constructor');
  }

  // ライフサイクルメソッド
  ngOnInit() {
    console.log('[child] ngOnInit');
  }
  ngOnChanges() {
    console.log('[child] ngOnChanges');
  }
  ngDoCheck() {
    console.log('[child] ndDoCheck');
  }
  ngAfterContentInit() {
    console.log('[child] ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('[child] ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('[child] ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('[child] ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('[child] ngOnDestroy');
  }
}