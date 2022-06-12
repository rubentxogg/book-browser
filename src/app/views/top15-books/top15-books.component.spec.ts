import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top15BooksComponent } from './top15-books.component';

describe('Top15BooksComponent', () => {
  let component: Top15BooksComponent;
  let fixture: ComponentFixture<Top15BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top15BooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top15BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
