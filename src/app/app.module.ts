import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BookCardComponent } from './book-card/book-card.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { Top15BooksComponent } from './views/top15-books/top15-books.component';


@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    HeaderComponent,
    Top15BooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
