import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  constructor(private bookService: BookService) {}

  public month: string = '1';
  public year: string = '2021';
  public books: Book[] = [];

  ngOnInit() {
    this.getTop15BooksByMonthAndYear(this.month, this.year);
  }

  private getTop15BooksByMonthAndYear(month: string, year: string): void {
    this.bookService.getTop15BooksByMonthAndYear(month, year).subscribe({
      next: (response) => {
        this.books = response;
      },
    });
  }

}
