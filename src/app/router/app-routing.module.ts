import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksByNameComponent } from '../views/books-by-name/books-by-name.component';
import { Top15BooksComponent } from '../views/top15-books/top15-books.component';
import { YearAwardedBooksComponent } from '../views/year-awarded-books/year-awarded-books.component';

const routes: Routes = [
  { path: 'top15-books', component: Top15BooksComponent },
  { path: 'books-by-name', component: BooksByNameComponent },
  { path: 'awarded-books', component: YearAwardedBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
