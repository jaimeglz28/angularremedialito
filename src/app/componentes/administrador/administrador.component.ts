import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { PartidaService } from 'src/app/partida.service';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocketService } from 'src/app/socket.service';



@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']



})




export class AdministradorComponent implements OnInit , OnDestroy {
  ngOnDestroy(): void {
    this.boton.manejarsocket('juego').close()
  }

  private url = 'http://localhost:3333/';
  
  public formcrearpartida: FormGroup;
  public builder = new FormBuilder();
  public json= {};
  partida: any;
  public enviarpreg;
  constructor(private registropartida:PartidaService, private boton:SocketService) { 
    this.formcrearpartida= new FormBuilder().group({
      nombre_partida: ['', Validators.required],
      activo: ['', Validators.required]
    })
   }

  ngOnInit() {
    this.boton.conectar();
    this.boton.susbribirse('juego')
    this.enviarpreg= new Array<Number>()
  }
    public registrart(){
      
      const url =  'partida/partidas';
      const header = new HttpHeaders().set('Content-type','application/json');
      this.json = JSON.stringify({nombre_partida: this.formcrearpartida.controls.nombre_partida.value,
         activa: this.formcrearpartida.controls.activo.value});

      this.boton.manejarsocket('juego').emit('nuevapartida', this.formcrearpartida.controls.nombre_partida.value)
      
  
        return this.registropartida.enviar(url,this.json,header).subscribe(result=>{
          console.log(result);
        this.formcrearpartida.reset();
        this.registropartida.recibir('pregunta', new HttpHeaders().set('Content-type', 'application/json')).subscribe((response: Number[]) =>{
          this.enviarpreg=response;

      })
      
        })
     
       

  

    }
    
    public enviarr(){
      this.boton.manejarsocket('juego').emit('enviarpreguntas',this.enviarpreg)   
    }
}
