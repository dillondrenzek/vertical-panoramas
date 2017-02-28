import { Subject, Observable } from 'rxjs/Rx';
import { SocketEvent } from './SocketEvent';
import * as _ from './SocketEvent';

// Socket.io interface from index.html
declare let io: any;



export class Socket {

  constructor(public url: string) {}

  private _socket: any;
  private _events = new Subject<SocketEvent<any>>();
  events: Observable<SocketEvent<any>> = this._events.asObservable();



  static create(url: string) {
    return io(url);
  }



  connect(): Observable<SocketEvent<any>> {
    this._socket = Socket.create(this.url)
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
    });;
    return this._events.asObservable();
  }



  emit(event: SocketEvent<any>) {
    this._socket.emit(event.name, event.data);
  }

}
