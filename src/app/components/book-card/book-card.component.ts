import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {

  @Input() month: string | undefined;
  @Input() year: string | undefined;
  @Input() books: Book[] = [];
  @Input() isLoading = false;
  @Input() isError = false;
  @Input() isEmpty = false;
  @Input() name: string | undefined;
  @Input() genre: string | undefined;

  public checkBookInGoodReads(url: string): void {
    window.open(url, "_blank");
  }
}