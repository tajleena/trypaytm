import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MobileComponent } from './mobile/mobile.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MobileComponent, BookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
