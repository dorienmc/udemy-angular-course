import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() generateNumber = new EventEmitter<number>();
  interval;
  currentNumber: number;

  constructor() {
   }

  onStartGame(): void {
    this.currentNumber = 0;
    this.interval = setInterval(() => {
      const randomNumber = Math.floor((Math.random() * 4) + 1);
      this.currentNumber += randomNumber;
      this.generateNumber.emit(this.currentNumber);
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.interval);
  }

}
