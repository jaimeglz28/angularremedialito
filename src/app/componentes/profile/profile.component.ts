import { Component, OnInit } from '@angular/core';
import { Authentictionservice, UserDetails } from 'src/app/authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details:UserDetails
  constructor(private auth: Authentictionservice) { }

  ngOnInit() {
    const current= this.auth.getUserDetails()
    this.auth.profile(current.uid).subscribe(
    user => {
      this.details =user
      localStorage.setItem('rol',user.rol)
      localStorage.setItem('username',user.username)
    },
    err =>{
      console.error(err)
    }
    
    )}

}
