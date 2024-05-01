import {Socket, io} from 'socket.io-client';
import {BASE_SOCKET_URI, SOCKET_EVENT} from './index.constants';

export class SocketClient {
  private static instance: SocketClient | null = null;
  private socket: Socket | null = null;

  constructor() {
    if (SocketClient.instance === null) {
      SocketClient.instance = this;
    }

    return SocketClient.instance;
  }

  public static getInstance() {
    if (SocketClient.instance === null) {
      SocketClient.instance = new SocketClient();
    }
    return SocketClient.instance;
  }

  public connectSocket() {
    try {
      console.log('===== Initialize Socket Client =====');

      this.socket = io(BASE_SOCKET_URI, {
        transports: ['websocket'],
      });

      this.socket.on(SOCKET_EVENT.CONNECT, this.onConnectListener);

      this.socket.on(SOCKET_EVENT.DISCONNECT, this.onDisconnectListener);
    } catch (error) {
      console.log('===== Initialize Socket Client Catch =====', error);
    }
  }

  public disconnectSocket() {
    console.log('===== Diconnect Socket Client =====');
    if (this.socket === null) {
      return;
    }

    this.socket.disconnect();
    this.socket = null;
  }

  private onConnectListener() {
    console.log('===== on Connect Listener ===== ');
    // Add logic Event emit listener
  }

  private onDisconnectListener() {
    console.log('===== on Disconnect Listener=====');
  }
}
