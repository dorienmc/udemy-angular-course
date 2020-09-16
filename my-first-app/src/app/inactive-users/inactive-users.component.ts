import { UsersService } from './../users-service.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService){}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
