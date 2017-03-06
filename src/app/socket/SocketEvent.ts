export type SocketEventName = 'add-message' | 'disconnect' | 'connect' | 'respond';

export abstract class SocketEvent {

  static Connect: SocketEventName = 'connect';
  static Disconnect: SocketEventName = 'disconnect';
  static Respond: SocketEventName = 'respond';
  static AddMessage: SocketEventName = 'add-message';

  constructor(
    public name: SocketEventName,
    public data: any
  ) {}

  // Comparison
  static sameType(ev1: SocketEvent, ev2: SocketEvent): boolean {
    return ev1.name === ev2.name;
  }



}

export class ConnectEvent extends SocketEvent {
  constructor() { super(SocketEvent.Connect, null); }
}

export class DisconnectEvent extends SocketEvent {
  constructor() { super(SocketEvent.Disconnect, null); }
}

export class RespondEvent extends SocketEvent {
  constructor(private _data: any) { super(SocketEvent.Respond, _data); }
}

export class AddMessage extends SocketEvent {
  constructor(private _message: string) { super(SocketEvent.AddMessage, _message); }
}
