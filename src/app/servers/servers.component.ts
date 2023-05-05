import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allowNewSerever = false;
serverCreated = false;
serverCreationStatus = 'No Server is created.';
serverName = '';

constructor() {
  setTimeout( () => {
    this.allowNewSerever = true;
  }, 2000);
}

ngOnInit() {

}


onCreateServer() {
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;

  this.serverCreated = true;
}

onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}
}