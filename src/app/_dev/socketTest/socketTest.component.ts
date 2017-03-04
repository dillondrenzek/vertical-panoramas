import { Component } from '@angular/core';
import { Socket } from '../socket/Socket';
import * as ev from '../socket/SocketEvent';

@Component({
  selector: 'socket-test',
  template: `
  <input type="text" [(ngModel)]="message"/>
  <input type="button" value="Send Message" (click)="send()"/>
    <div class="log">
      <pre class="log-message" *ngFor="let res of responses">{{res | json}}</pre>
    </div>
  `,
  styles: [
    `
    .log {
      height: 400px;
      overflow-y : auto;
      background: #eaeaea;
    }
    `
  ]
})
export class SocketTestComponent {

  socket = new Socket('https://vertical-panoramas.herokuapp.com');
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
    // console.warn('socket', this.socket);
    // this.socket.send(this.message);
    this.socket.emit(new ev.AddMessageEvent(this.message));
  }
}
