import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [...Array(15).keys()];
  onlyOdd = false;
  oddNumbers = this.numbers.filter(i => i % 2 === 1);
  evenNumbers = this.numbers.filter(i => i % 2 === 0);
}
