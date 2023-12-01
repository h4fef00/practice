import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css'],
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['TestServer'];
  paragraph: string = 'I have some random content';
  isBtnClicked: boolean = false;
  btnClicks: number = 0;
  timeStamps: any[] = [];
  // userName: string = '';
  // paragraph: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `${this.serverName} was created`;
    this.resetInput();
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  // onUpdateUsername() {
  //   this.paragraph = `${this.userName} is your username`;
  //   this.resetInput();
  // }

  resetInput() {
    this.serverName = '';
  }

  toggleParagraph() {
    this.isBtnClicked = !this.isBtnClicked;
    this.btnClicks++;
    // this.timeStamps.push(this.btnClicks);
    this.timeStamps.push(new Date());
  }
}
