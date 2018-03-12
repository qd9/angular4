import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name: 'test', type: 'server', content: 'test content'}];

  // serverData: {serverName: string, serverContent: string} object 里面的property name 必须跟emit的property name 一致；
  onAddServer(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBluePoint(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'bluepoint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // tslint:disable-next-line:one-line
  onChangeContent(){
    this.serverElements[0].name = 'Changed';
  }

  // tslint:disable-next-line:one-line
  onDeleteContent(){
    this.serverElements.splice(0, 1);
  }
}
