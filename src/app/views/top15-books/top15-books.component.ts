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
export class Top15BooksComponent implements OnInit {

  constructor(private readonly bookService: BookService) {}
  
  public isLoading = false;
  public isError = false;
  public isEmpty = false;
  public books: Book[] = [];
  public date: FormControl = new FormControl(moment());
  public month = "";
  public year = "";
  public panelOpenState = false;
  public maxDate: Date | undefined;

  ngOnInit(): void {
    const ctrlValue = this.date.value;
    this.maxDate = new Date(ctrlValue.year(moment().year(), ctrlValue.year(moment().month)));
    this.month = ctrlValue.month();
    this.year = ctrlValue.year();
  }

  public openClose(): string {
    if(this.panelOpenState) {
      return "close";
    }
    return "open";
  }

  public isDisabled(): boolean {
    return (this.month === "" || this.year === "");
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
    this.bookService.getTop15BooksByMonthAndYear(month + 1, year).subscribe({
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
