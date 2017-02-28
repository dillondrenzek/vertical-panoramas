import { Component } from '@angular/core';

declare let io: any;

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

  socket = io('http://localhost:8080');
  responses: string[] = [];

  message: string = '';

  constructor() {

    this.socket.on('connect', () => { console.warn('Socket connect.'); });
    this.socket.on('respond', (data: any) => { this.responses.push(data); });
    this.socket.on('disconnect', () => { console.warn('Socket disconnect.'); });

  }

  send() {
    // console.warn('socket', this.socket);
    // this.socket.send(this.message);
    this.socket.emit('add-message', this.message);
  }
}
