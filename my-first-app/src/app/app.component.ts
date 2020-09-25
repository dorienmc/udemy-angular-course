import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  states = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test', 'test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenNames(control: FormControl): {[k: string]: boolean} {
    if (this.forbiddenProjectNames.includes(control.value)) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
 }

// <!--
//           Add your own Validator which doesn't allow "Test" as a Project Name
//           Also implement that Validator as an async Validator (replace the other one)
//       -->
