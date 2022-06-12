import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top15BooksComponent } from './views/top15-books/top15-books.component';

const routes: Routes = [
  { path: 'top15-books', component: Top15BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
