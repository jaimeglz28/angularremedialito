import { Component, OnInit } from '@angular/core';
import {Authentictionservice} from 'src/app/authentication.service'
import {Router} from '@angular/router'
import { TokenPayload } from 'src/app/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    credentials:TokenPayload ={
     
      username:'',
      email:'',
      password:'',
      rol:''
    }

  constructor(private auth: Authentictionservice, private router:Router) { }
  

  registro(){
    this.auth.registro(this.credentials).subscribe(
      () =>{
        this.router.navigateByUrl('/login')
      },
      err => {
        console.error(err)
      }

    )
  }

  ngOnInit() {
  }

}
