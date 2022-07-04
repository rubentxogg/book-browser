import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Top15BooksComponent } from './views/top15-books/top15-books.component';
import { BooksByNameComponent } from './views/books-by-name/books-by-name.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { YearAwardedBooksComponent } from './views/year-awarded-books/year-awarded-books.component';
import { WeeklyPopularBooksComponent } from './views/weekly-popular-books/weekly-popular-books.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    HeaderComponent,
    Top15BooksComponent,
    BooksByNameComponent,
    FooterComponent,
    YearAwardedBooksComponent,
    WeeklyPopularBooksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
