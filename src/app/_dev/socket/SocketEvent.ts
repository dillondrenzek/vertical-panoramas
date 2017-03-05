export const SocketEventType: {[key: string]: SocketEventName} = {
  Disconnect: 'disconnect',
  Connect: 'connect',
  Respond: 'respond'
};

export type SocketEventName = 'add-message' | 'disconnect' | 'connect' | 'respond';


export abstract class SocketEvent<T> {

  static Connect: SocketEventName = 'connect';
  static Disconnect: SocketEventName = 'disconnect';
  static Respond: SocketEventName = 'respond';
  static AddMessage: SocketEventName = 'add-message';

  constructor(
    public name: SocketEventName,
    public data: T
  ) {}
}

export class ConnectEvent extends SocketEvent<void> {
  constructor() { super(SocketEvent.Connect, null); }
}

export class DisconnectEvent extends SocketEvent<void> {
  constructor() { super(SocketEvent.Disconnect, null); }
}

export class RespondEvent extends SocketEvent<any> {
  constructor(private _data: any) { super(SocketEvent.Respond, _data); }
}

export class AddMessage extends SocketEvent<string> {
  constructor(private _message: string) { super(SocketEvent.AddMessage, _message); }
}
