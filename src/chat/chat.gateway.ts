import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send_message')
  handleMessage(@MessageBody() message: { sender: string; text: string }) {
    this.server.emit('receive_message', message); 
  }

  @SubscribeMessage('send_notification')
  handleNotification(@MessageBody() notif: { title: string; body: string }) {
    this.server.emit('receive_notification', notif);
  }
}
