import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  email: string;
  subscription = 'advanced';
  password: string;

  onSubmit() {
    console.log(this.signupForm.value);
    this.email = this.signupForm.value.email;
    this.subscription = this.signupForm.value.subscription;
    this.password = this.signupForm.value.password;
  }
}
