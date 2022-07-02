import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  public getTop15BooksByMonthAndYear(month: string, year: string): Observable<Book[]> {
    return this.http.get<Book[]>(
      `${environment.top15BooksByMonthAndYearApiBaseUrl}/${year}/${month}`,
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHeaderName,
            environment.XRapidAPIHeaderValue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderValue
          )
      }
    );
  }

  public getBooksByName(name: string): Observable<Book[]> {
    return this.http.get<Book[]>(
      `${environment.searchBookByNameApiBaseUrl}/${name}`,
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHeaderName,
            environment.XRapidAPIHeaderValue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderValue
          )
      }
    );
  }
}
