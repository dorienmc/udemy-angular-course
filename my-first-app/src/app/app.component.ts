import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  subscription: string;
  password: string;

  onSubmit(form: NgForm) {
    this.email = form.value.email;
    this.subscription = form.value.subscription;
    this.password = form.value.password;
  }
}
