import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-year-awarded-books',
  templateUrl: './year-awarded-books.component.html',
  styleUrls: ['./year-awarded-books.component.css']
})
export class YearAwardedBooksComponent {

  public isLoading = false;
  public isError = false;
  public books: Book[] = [];
  public panelOpenState = false;

  public openClose(): string {
    if(this.panelOpenState) {
      return "close";
    }
    return "open";
  }

  public isDisabled(): boolean {
    // return (this.month === "" || this.year === "");
    return true;
  }
}
