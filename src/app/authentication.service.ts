import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import{Router} from '@angular/router';


export interface UserDetails {
    id: Number
    username: string
    email: string  
    password:string
    rol:string
    exp: number
    iat:number
    uid:Number
}
interface TokenResponse{
    token:string
}

export interface TokenPayload{
    
    username: string
    email: string  
    password:string
    rol:string

}

@Injectable()
export class Authentictionservice{
    private token: string 
    private url = 'http://192.168.43.29:3333/';
     
    constructor (private http: HttpClient, private router:Router){ }

    private saveToken (token:string): void {
        localStorage.setItem('usertoken',token)
        this.token=token
    }

    private getToken(): string {
        if(!this.token){
            this.token=localStorage.getItem('usertoken')
        }
        return this.token
    }

    public getUserDetails(): UserDetails{
        const token = this.getToken()
        let payload
        if (token){
            payload= token.split('.')[1]
            payload=window.atob(payload)
            console.log(payload)
            return JSON.parse(payload)

        }else{
            return null
        }
    }
    public isLoggedIn():boolean{
        const user=this.getUserDetails()
        if(user){
            return true
        }else{
            return false
        }
    


    }
    public admin():boolean{
        
        if(localStorage.getItem('rol') === '1'){
            return true
        }else{
            return false
        }
    


    }
    public registro(user:TokenPayload):Observable<any>{
        return this.http.post( this.url + 'users/registro',user)
    }
    public login (user:TokenPayload):Observable<any>{
            const base= this.http.post(this.url + 'users/login',user)
            const request = base.pipe(
                map((data: TokenResponse)=>{
                    if (data.token){
                        this.saveToken(data.token)
                    }
                    return data
                })
            )
            return request
        }
        public profile(id): Observable<any>{
            return this.http.get(this.url + 'users/getuser/' + id)
        }
        public logout():void{
            localStorage.removeItem('rol')
            this.token =''
            window.localStorage.removeItem('usertoken')
            window.localStorage.removeItem('username')
            this.router.navigateByUrl('/')
        }

      
          
}