// Angularモジュール
import { NgModule /*オブジェクト名*/ } from '@angular/core'; // モジュール名
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CoopModule } from './coop/coop.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports: [BrowserModule, CoopModule, BrowserAnimationsModule],
  declarations: [AppComponent, ChildComponent],
  bootstrap: [AppComponent] // ルートコンポーネント・メインコンポーネントという。
})
export class AppModule { }
