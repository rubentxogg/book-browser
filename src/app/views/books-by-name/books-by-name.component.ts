import { Component } from '@angular/core';

@Component({
  selector: 'app-books-by-name',
  templateUrl: './books-by-name.component.html',
  styleUrls: ['./books-by-name.component.css']
})
export class BooksByNameComponent {

  public panelOpenState: boolean = false;

  public openClose(): string {
    if(this.panelOpenState) {
      return "close";
    }
    return "open";
  }
}
