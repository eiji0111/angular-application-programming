// Angularモジュール
import { NgModule /*オブジェクト名*/ } from '@angular/core'; // モジュール名
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoopModule } from './coop/coop.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, CoopModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent] // ルートコンポーネント・メインコンポーネントという。
})
export class AppModule { }
