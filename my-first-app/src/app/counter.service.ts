import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  nTransitionsToActive = 0;
  nTransitionsToInActive = 0;
  transitionToActive = new EventEmitter<number>();
  transitionToInactive = new EventEmitter<number>();

  constructor() {}

  countTransitionToActive() {
    this.nTransitionsToActive++;
    console.log(
      `There have been ${this.nTransitionsToActive} transitions from inactive -> active`
    );
    this.transitionToActive.emit(this.nTransitionsToActive);
  }

  countTransitionToInactive() {
    this.nTransitionsToInActive++;
    console.log(
      `There have been ${this.nTransitionsToInActive} transitions from active -> inactive`
    );
    this.transitionToInactive.emit(this.nTransitionsToInActive);
  }
}
