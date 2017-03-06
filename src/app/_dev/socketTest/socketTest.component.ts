import { Component,
  Inject }                    from '@angular/core';
import { Socket }             from '../../socket/Socket';
import * as ev                from '../../socket/SocketEvent';
import { EnvConfig}           from '../../../../lib/config/index';
import { ConfigService }      from '../../config/config.service';
import { SocketService }      from '../../socket/socket.service';

@Component({
  selector: 'socket-test',
  template: `
    <div class="col-xs-4">
      <h3>Connect Event</h3>
      <div *ngFor="let res of responses">{{res | json}}</div>
    </div>
    <input type="text" [(ngModel)]="message"/>
    <input type="button" value="Send Message" (click)="send()"/>
  `,
  moduleId: module.id
})
export class SocketTestComponent {




  get socket(): Socket {
    return this.socketService.socket;
  }

  responses: string[] = [];

  message: string = '';

  constructor(
    private configService: ConfigService,
    private socketService: SocketService
  ) {

    this.socketService
      .eventsByName(ev.SocketEvent.Respond)
      .subscribe((ev: ev.RespondEvent) =>
        this.receiveResponse(ev));
  }

  receiveResponse(res: ev.RespondEvent) {
    this.responses.push(res.name + ': ' + res.data);
  }

  send() {
    this.socket.emit(new ev.AddMessage(this.message));
  }
}
