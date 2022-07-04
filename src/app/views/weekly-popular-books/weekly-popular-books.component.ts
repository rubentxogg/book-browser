import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-weekly-popular-books',
  templateUrl: './weekly-popular-books.component.html',
  styleUrls: ['./weekly-popular-books.component.css']
})
export class WeeklyPopularBooksComponent {

  constructor(private bookService: BookService) {}

  public isLoading = false;
  public isError = false;
  public panelOpenState = false;
  public genre = "";
  public books: Book[] = [];

  public isDisabled(): boolean {
    return this.genre === "";
  }

  public openClose(): string {
    if(this.panelOpenState) {
      return "close";
    }
    return "open";
  }

  public getWeeklyPopularBooksByGenre(name: string): void {
    this.isLoading = true;
    this.bookService.getWeeklyPopularBooksByGenre(name).subscribe({
      next: (response) => {
        this.books = response;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.isError = true;
      },
    });
  }

}
