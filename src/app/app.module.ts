// Angularモジュール
import { NgModule /*オブジェクト名*/ } from '@angular/core'; // モジュール名
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ] // ルートコンポーネント・メインコンポーネントという。
})
export class AppModule { }
