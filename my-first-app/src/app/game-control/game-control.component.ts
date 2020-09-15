import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() generateNumber = new EventEmitter<{ generatedNumber: number}>();
  emitterRef;
  currentNumber: number;

  constructor() {
   }

  onStartGame(): void {
    this.currentNumber = 0;
    this.emitterRef = setInterval(() => {
      const randomNumber = Math.floor((Math.random() * 4) + 1);
      this.currentNumber += randomNumber;
      this.generateNumber.emit({
        generatedNumber: this.currentNumber
      });
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.emitterRef);
  }

}
