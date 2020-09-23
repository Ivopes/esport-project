import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  showTeam = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toTeam(): void {
    this.router.navigate(['/team']);
  }
  toInfo(): void {
    this.router.navigate(['/info']);
  }
  toContact(): void {
    this.router.navigate(['/contact']);
  }
}
