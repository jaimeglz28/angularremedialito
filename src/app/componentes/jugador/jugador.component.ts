import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from 'src/app/socket.service';
import { PartidaService } from 'src/app/partida.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit , OnDestroy {
  ngOnDestroy(): void {
    this.boton.manejarsocket('juego').close()
  }

   
  public textopregunta='';
  preguntas;
  cont: number;
  constructor(private boton: SocketService, private http:PartidaService, private route:Router) {
    

    
   }

  ngOnInit() {
    this.sc=0
    this.selec=0
    this.cont = 0 
  this.preguntas = new Array<Number>()
    setTimeout(()=>{
      this.boton.conectar();
      this.boton.susbribirse('juego')
      this.boton.manejarsocket('juego').on('recibipreguntas',(datos)=>{
        this.preguntas=datos;
        console.log('recibir tu pregunta '+ this.preguntas) 
        //this.mostrarpregunta(this.preguntas[this.cont])
        this.cambiarpregunta()
      })
      this.boton.manejarsocket('juego').on('next',()=>{
        this.cambiarpregunta()
      })
      this.boton.manejarsocket('juego').on('ganador',(ganador)=>{
        alert('el ganador fue: '+ ganador)
        this.iniciar();
        this.route.navigate(['/'])
        
      })
    },1000)


  }
  public mostrarpregunta(numero){
    try {
      this.http.recibir('deuna/'+numero, new HttpHeaders().set('Content-type', 'application/json')).subscribe(Response=>{
        this.textopregunta=JSON.parse(JSON.stringify(Response)).Preguntas;
        console.log(Response)
        this.traerrespuesta(JSON.parse(JSON.stringify(Response)).categoria)
  
  
  
      })
    } catch (error) {
      console.log('Ya no quedan preguntas ')
    }

  }
  public cambiarpregunta(){
    try {
      if(this.preguntas[this.cont + 1]){

        this.mostrarpregunta(this.preguntas[this.cont++])
      } else {
        this.boton.manejarsocket('juego').emit('verificarganador', {username: localStorage.getItem('username'),puntos: this.sc})
      }
    } catch (error) {
      console.log('Ya no quedan preguntas ')
    }
    
  }
  trespuesta=new Array<any>()
  public traerrespuesta(categoria){
    this.http.recibir('respuestas/'+categoria, new HttpHeaders().set('Content-type', 'application/json')).subscribe((Response: any[])=>{
   this.trespuesta=Response
   console.log(this.trespuesta)


  })
}
sc=0
public selec;
  public mandarvalor(valor){
    this.selec=Number(valor);


  }
  public jugar(){
    this.sc=this.sc+this.selec
    this.boton.manejarsocket('juego').emit('cambiarpregunta')
    // this.cambiarpregunta()
  }
  public iniciar(){
    this.sc=0
    this.selec=0
    this.cont = 0
  this.preguntas = new Array<Number>()
  }
}





