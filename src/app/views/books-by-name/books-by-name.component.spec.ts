import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByNameComponent } from './books-by-name.component';

describe('BooksByNameComponent', () => {
  let component: BooksByNameComponent;
  let fixture: ComponentFixture<BooksByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
