import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MobileComponent } from './mobile/mobile.component';
import { BookComponent } from './book/book.component';
import { BlueComponent } from './blue/blue.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, MobileComponent, BookComponent, BlueComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
