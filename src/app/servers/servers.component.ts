import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  username = '';
  constructor() {
    setTimeout(() => {this.allowNewServer = true;}, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! with name ' + this.serverName;
  }

  onUpdateServerName($event: Event) {
    this.serverName = ($event.target as HTMLInputElement).value;
  }

  clearUsername() {
    this.username = '';
  }
}
