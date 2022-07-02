import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearAwardedBooksComponent } from './year-awarded-books.component';

describe('YearAwardedBooksComponent', () => {
  let component: YearAwardedBooksComponent;
  let fixture: ComponentFixture<YearAwardedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearAwardedBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearAwardedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
