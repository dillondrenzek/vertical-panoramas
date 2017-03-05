import { Component,
  Inject } from '@angular/core';
import { Socket } from '../socket/Socket';
import * as ev from '../socket/SocketEvent';
import { EnvConfig} from '../../../../lib/config/index';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'socket-test',
  template: `
    <div>
      <div *ngFor="let res of responses">{{res | json}}</div>
    </div>
    <input type="text" [(ngModel)]="message"/>
    <input type="button" value="Send Message" (click)="send()"/>
  `,
  moduleId: module.id
})
export class SocketTestComponent {

  socket: Socket;
  responses: string[] = [];

  message: string = '';

  constructor(private configService: ConfigService) {
    let config: EnvConfig = this.configService.config;

    console.warn('config', config);

    let socketUrl = config.appPath;

    this.socket = new Socket(socketUrl);

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
