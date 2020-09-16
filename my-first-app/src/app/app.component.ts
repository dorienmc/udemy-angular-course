import { CounterService } from './counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nTransitionsToActive = 0;
  nTransitionsToInActive = 0;

  constructor(private counterService: CounterService) {
    this.counterService.transitionToActive.subscribe(
      (n: number) => {
        this.nTransitionsToActive = n;
      }
    );
    this.counterService.transitionToInactive.subscribe((n: number) => {
      this.nTransitionsToInActive = n;
    });
  }
}
