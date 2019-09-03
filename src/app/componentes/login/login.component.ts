import { Component, OnInit } from '@angular/core';
import {Authentictionservice} from 'src/app/authentication.service'
import {Router} from '@angular/router'
import { TokenPayload } from 'src/app/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    credentials:TokenPayload ={
     
      username:'',
      email:'',
      password:'',
      rol:''
    }

  constructor(private auth: Authentictionservice, private router:Router) { }
  

  login(){
    this.auth.login(this.credentials).subscribe(
      () =>{
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }

    )
  }

  ngOnInit() {
  }

}
