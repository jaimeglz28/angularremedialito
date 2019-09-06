import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from 'src/app/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esperando',
  templateUrl: './esperando.component.html',
  styleUrls: ['./esperando.component.css']
})
export class EsperandoComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.boton1.manejarsocket('juego').close()
  }

  constructor(private boton1: SocketService, private ruter: Router) { }

  ngOnInit() {
    this.boton1.conectar();
    this.boton1.susbribirse('juego')
    this.boton1.manejarsocket('juego').on('iniciarpartida', (partida) => {
      console.log('subscrito a la partida: ' + partida)
      this.ruter.navigate(['/jugador'])
    })
  }


}
