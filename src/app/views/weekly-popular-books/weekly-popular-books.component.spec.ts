import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPopularBooksComponent } from './weekly-popular-books.component';

describe('WeeklyPopularBooksComponent', () => {
  let component: WeeklyPopularBooksComponent;
  let fixture: ComponentFixture<WeeklyPopularBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyPopularBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyPopularBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
