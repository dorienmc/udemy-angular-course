import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  states = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null),
      'email': new FormControl(null),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}

// <!--
//           Create a Form with the following Controls and Validators
//           1) Project Name (should not be empty)
//           2) Mail (should not be a empty and a valid email)
//           3) Project Status Dropdown, with three values: 'Stable', 'Critical', 'Finished'
//           4) Submit Button

//           Add your own Validator which doesn't allow "Test" as a Project Name

//           Also implement that Validator as an async Validator (replace the other one)

//           Upon submitting the form, simply print the value to the console
//       -->
