import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {
  private url = 'http://192.168.43.29:3333/';

  constructor(private http: HttpClient) {}
   
  public  enviar(ruta,content,principal) {
    return this.http.post(this.url + ruta,content,{headers: principal}).pipe( catchError(this.handleError));
  }

  public  recibir(ruta,principal) {
    return this.http.get(this.url + ruta,{headers: principal}).pipe( catchError(this.handleError));
  }
  public handleError (error: HttpErrorResponse){
    if(error instanceof ErrorEvent){
      alert('Error en la conexion \n '+ error.error)
    } else{
      alert('Algo inesperado \n'+ error.error)
    }
    return throwError(error.error);

  }


}


