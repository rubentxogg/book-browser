import { Component, OnInit } from '@angular/core';
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
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-year-awarded-books',
  templateUrl: './year-awarded-books.component.html',
  styleUrls: ['./year-awarded-books.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class YearAwardedBooksComponent implements OnInit {

  constructor(private readonly bookService: BookService) {}

  public isLoading = false;
  public isError = false;
  public isEmpty = false;
  public books: Book[] = [];
  public panelOpenState = false;
  public date: FormControl = new FormControl(moment());
  public year = "";
  public maxYear = 0;

  ngOnInit(): void {
    const ctrlValue = this.date.value;
    this.maxYear = ctrlValue.year(moment().year() -1);
    this.year = ctrlValue.year();
  }

  public openClose(): string {
    if(this.panelOpenState) {
      return "close";
    }
    return "open";
  }

  public isDisabled(): boolean {
    return this.year === "";
  }

  public setYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(this.date.value);
    this.year = ctrlValue.year();
    datepicker.close();
  }

  public getAwardedBooksOfAYear(year: string): void {
    this.isLoading = true;
    this.bookService.getAwardedBooksOfAYear(year).subscribe({
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
