import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartidaService } from 'src/app/partida.service';
import { HttpHeaders } from '@angular/common/http';
import { observable } from 'rxjs';

@Component({
  selector: 'app-verpartidas',
  templateUrl: './verpartidas.component.html',
  styleUrls: ['./verpartidas.component.css']
})
export class VerpartidasComponent implements OnInit {
  partidas;
 constructor(private mostrar: PartidaService){


 }
  
 ngOnInit( ) {
  this.partidas=[];
   this.mostrarpartidas()
  }
   public mostrarpartidas(){
     const headers = new HttpHeaders().set('Content-type','application/json')
    this.mostrar.recibir('partida/mostrar',headers).subscribe(respuesta=>{
      this.partidas=JSON.parse(JSON.stringify(respuesta))
      console.log(this.partidas)
    })
   }

    
   }

  
      
  
        


  



  