import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-by-name',
  templateUrl: './books-by-name.component.html',
  styleUrls: ['./books-by-name.component.css']
})
export class BooksByNameComponent {

  constructor(private bookService: BookService) {}

  public isLoading = false;
  public isError = false;
  public isEmpty = false;
  public panelOpenState = false;
  public bookName = "";
  public books: Book[] = [];

  public isDisabled(): boolean {
    return this.bookName === "";
  }

  public openClose(): string {
    if(this.panelOpenState) {
      return "close";
    }
    return "open";
  }

  public getBooksByName(name: string): void {
    this.isLoading = true;
    this.bookService.getBooksByName(name).subscribe({
      next: (response) => {
        this.books = response;
        this.isError = false;
        this.isLoading = false;

        if(!response.length) {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
        }
      },
      error: () => {
        this.isLoading = false;
        this.isError = true;
        this.isEmpty = false;
      },
    });
  }
}
