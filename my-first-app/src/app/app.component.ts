import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      // 'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'projectName': new FormControl(null, [Validators.required], this.asyncForbiddenNames.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null),
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

  asyncForbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.includes(control.value)) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
 }
