import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, LightboxModule } from 'primeng/primeng';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table'
import { HttpModule } from '@angular/http';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    HttpModule,
    LightboxModule,
    TableModule,
    DataViewModule,
    ModalModule.forRoot(),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
