import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .paintWhite {
      color: white;
    }
  `]
})
export class Assignment3Component implements OnInit {
  displayDetails = false;
  clickLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(): void {
    this.displayDetails = !this.displayDetails;
    this.clickLog.push(`Clicked button ${this.clickLog.length + 1} times`);
  }

  getColor(i: number): string {
    return i >= 4 ? 'blue' : 'inherit';
  }

}
