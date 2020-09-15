import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];
  evenElements = [];
  oddElements = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {bluePrintName: string, bluePrintContent: string}): void {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.bluePrintName,
      content: bluePrintData.bluePrintContent
    });
  }

  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst(): void {
    this.serverElements.splice(0, 1);
  }

  onNumberGenerated(data: {generatedNumber: number}): void {
    const n = data.generatedNumber;
    if (n % 2 === 0) {
      this.evenElements.push(n);
    } else {
      this.oddElements.push(n);
    }
  }
}
