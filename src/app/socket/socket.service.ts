import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs/Rx';

import { ConfigService }  from '../config/config.service';
import { Socket }         from './Socket';
import * as _             from './SocketEvent';




@Injectable()
export class SocketService {


  /**
   * Socket
   */

  socket: Socket = null;

  constructor(private configService: ConfigService) {
    let socketUrl = this.configService.config.appPath;
    this.socket = new Socket(socketUrl);
  }



  // Connect on SocketEvent
  eventsByName(filterBy: _.SocketEventName): Observable<_.SocketEvent>{
    return this.socket.events
      .filter((emit: _.SocketEvent) => {
        return emit.name === filterBy;
      });
  }


}
