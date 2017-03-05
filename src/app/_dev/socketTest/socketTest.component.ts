import { Component } from '@angular/core';
import { Socket } from '../socket/Socket';
import * as ev from '../socket/SocketEvent';

@Component({
  selector: 'socket-test',
  template: `
    <div>
      <div *ngFor="let res of responses">{{res | json}}</div>
    </div>
    <input type="text" [(ngModel)]="message"/>
    <input type="button" value="Send Message" (click)="send()"/>
  `,
})
export class SocketTestComponent {

  socket = new Socket('http://localhost:5000');
  responses: string[] = [];

  message: string = '';

  constructor() {

    this.socket.connect()
      .subscribe((e: ev.SocketEvent<any>) => this.receiveEvent(e));

  }

  receiveEvent(event: ev.SocketEvent<any>) {
    this.responses.push(event.name + ': ' + event.data);
  }

  send() {
    this.socket.emit(new ev.AddMessage(this.message));
  }
}
