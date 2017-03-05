import { Component,
  Inject } from '@angular/core';
import { Socket } from '../socket/Socket';
import * as ev from '../socket/SocketEvent';
import { ENV_CONFIG, EnvConfig} from '../../../env';

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

  socket: Socket;
  responses: string[] = [];

  message: string = '';

  constructor(@Inject(ENV_CONFIG) private _env: EnvConfig) {

    this.socket = new Socket('http://' + _env.appPath + ':' +_env.appPort );

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
