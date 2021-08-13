// Angularモジュール
import { NgModule /*オブジェクト名*/ } from '@angular/core'; // モジュール名
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ] // ルートコンポーネント・メインコンポーネントという。
})
export class AppModule { }
