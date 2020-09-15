import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{gameNumber: number}>();
  emitterRef: NodeJS.Timeout;
  currentNumber: number;

  constructor() {
    this.currentNumber = 1;
   }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.emitterRef = setInterval(() => {
      this.gameStarted.emit({
        gameNumber: this.currentNumber
      });
      this.currentNumber++;
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.emitterRef);
  }

}
