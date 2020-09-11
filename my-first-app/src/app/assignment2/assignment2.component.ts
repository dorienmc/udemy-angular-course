import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html'
})
export class Assignment2Component {
  username = 'testuser';

  isUserNameEmpty(): boolean {
    return this.username.length === 0;
  }

  resetUserName(): void {
    this.username = '';
  }
}
