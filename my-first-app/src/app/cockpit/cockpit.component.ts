import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  newServerContent = '';
  serverElements = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement): void {
    this.bluePrintCreated.emit({
      bluePrintName: nameInput.value,
      bluePrintContent: this.newServerContent
    });
  }
}
