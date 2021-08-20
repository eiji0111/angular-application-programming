// Angularモジュール
import { NgModule /*オブジェクト名*/ } from '@angular/core'; // モジュール名
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailsComponent } from './coop/details.component';
import { EditComponent } from './coop/edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DetailsComponent, EditComponent],
  bootstrap: [AppComponent] // ルートコンポーネント・メインコンポーネントという。
})
export class AppModule { }
