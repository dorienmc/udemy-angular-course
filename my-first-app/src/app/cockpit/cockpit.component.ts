import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ bluePrintName: string, bluePrintContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement): void {
    this.bluePrintCreated.emit({
      bluePrintName: nameInput.value,
      bluePrintContent: this.serverContentInput.nativeElement.value
    });
  }
}
