import { Subject, Observable } from 'rxjs/Rx';
import { SocketEvent } from './SocketEvent';
import * as _ from './SocketEvent';

// Socket.io interface from index.html
declare let io: any;



export class Socket {

  // Socket IO instance
  private _socket: any;


  constructor(public url: string) {
    this._socket = io(url);
    this._socket.on(SocketEvent.Connect, () => {
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


  /**
   * Events
   */
  private _events = new Subject<SocketEvent>();
  events: Observable<SocketEvent> = this._events.asObservable();

  static create(url: string) {
    return new Socket(url);
  }

  emit(event: SocketEvent) {
    this._socket.emit(event.name, event.data);
  }

  // connect(url: string = this.url): Observable<SocketEvent> {
  //   this._socket = Socket.create(url);
  //
  //   return this._events.asObservable();
  // }
  //
  //
  //


}
