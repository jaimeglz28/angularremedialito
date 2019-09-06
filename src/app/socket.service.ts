import { Injectable } from '@angular/core';
import Ws from '@adonisjs/websocket-client'
const ws = Ws('ws://192.168.43.29:3333')
@Injectable({
  providedIn: 'root'
})
export class SocketService {
 public conectar(){
   ws.connect();

 }
 public socket= ws;
 public susbribirse(canal){
  this.socket= ws.subscribe(canal)

 }
 public manejarsocket(canal){
     return  this.socket= ws.getSubscription(canal)
 }


  constructor() { }
}

