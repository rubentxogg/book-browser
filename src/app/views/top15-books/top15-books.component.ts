import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

import * as _moment from 'moment';
import { Moment } from 'moment';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-top15-books',
  templateUrl: './top15-books.component.html',
  styleUrls: ['./top15-books.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class Top15BooksComponent {

  constructor(private bookService: BookService) {}
  
  public isLoading: boolean = false;
  public isError: boolean = false;
  public books: Book[] = [];
  public date: FormControl = new FormControl(moment());
  public month: string = "";
  public year: string = "";
  public panelOpenState: boolean = false;

  public openClose(): string {
    if(this.panelOpenState) {
      return "close";
    }
    return "open";
  }

  public isDisabled(): boolean {
    if(this.month === "" || this.year === "") {
      return true;
    }
    return false;
  }

  public setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(this.date.value);
    this.month = ctrlValue.month();
    this.year = ctrlValue.year();
    datepicker.close();
  }

  public getTop15BooksByMonthAndYear(month: string, year: string): void {
    this.isLoading = true;
    this.bookService.getTop15BooksByMonthAndYear(month, year).subscribe({
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
