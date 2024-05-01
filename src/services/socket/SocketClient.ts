import {Socket, io} from 'socket.io-client';
import {BASE_SOCKET_URI} from './index.constants';

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

  async initializeSocket() {
    try {
      console.log('===== Initialize Socket Client =====');

      this.socket = io(BASE_SOCKET_URI, {
        transports: ['websocket'],
      });

      this.socket.on('connect', this.onConnect);
      console.log('===== Initialize Socket Client ===== , socket');
    } catch (error) {
      console.log('===== Initialize Socket Client Catch =====', error);
    }
  }

  private onConnect(value: any) {
    console.log('===== onConnect ===== ', value);
  }
}
