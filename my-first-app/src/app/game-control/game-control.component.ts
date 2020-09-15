import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() generateNumber = new EventEmitter<{ generatedNumber: number}>();
  emitterRef;
  currentNumber: number;

  constructor() {
    this.currentNumber = 1;
   }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.emitterRef = setInterval(() => {
      this.generateNumber.emit({
        generatedNumber: this.currentNumber
      });
      this.currentNumber++;
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.emitterRef);
  }

}
