import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import { AddListComponent } from './add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
