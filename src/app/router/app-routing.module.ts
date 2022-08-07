import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksByNameComponent } from '../views/books-by-name/books-by-name.component';
import { HomeComponent } from '../views/home/home.component';
import { Top15BooksComponent } from '../views/top15-books/top15-books.component';
import { WeeklyPopularBooksComponent } from '../views/weekly-popular-books/weekly-popular-books.component';
import { YearAwardedBooksComponent } from '../views/year-awarded-books/year-awarded-books.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'top15-books', component: Top15BooksComponent },
  { path: 'books-by-name', component: BooksByNameComponent },
  { path: 'awarded-books', component: YearAwardedBooksComponent },
  { path: 'weekly-popular-books', component: WeeklyPopularBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
