import { Subject, Observable } from 'rxjs/Rx';
import { SocketEvent } from './SocketEvent';
import * as _ from './SocketEvent';

// Socket.io interface from index.html
declare let io: any;

export class Socket {

  constructor(public url: string) {
    // Create instance of Socket.io, attach appropriate events
    let _io = io(url)
      .on(SocketEvent.Connect, () => {
        console.warn('Socket connect.');
        this._events.next(new _.ConnectEvent());
      })
      .on(SocketEvent.Respond, (data: any) => {
        this._events.next(new _.RespondEvent(data));
      })
      .on(SocketEvent.Disconnect, () => {
        console.warn('Socket disconnect.');
        this._events.next(new _.DisconnectEvent());
      });
  }

  // Socket IO instance
  private _socket: any;

  // SocketEvent Stream
  private _events = new Subject<SocketEvent>();
  events: Observable<SocketEvent> = this._events.asObservable();


  emit(event: SocketEvent) {
    this._socket.emit(event.name, event.data);
  }

}
