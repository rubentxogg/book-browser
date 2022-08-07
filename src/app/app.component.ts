import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.navigate(['home'], { relativeTo: this.route });
  }
}
