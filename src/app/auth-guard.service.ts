import{Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {Authentictionservice} from './authentication.service'

@Injectable()
export class AuthGuardservice implements CanActivate{
    constructor(private auth: Authentictionservice, private router: Router){}
      
        canActivate(){
             if (!this.auth.isLoggedIn()){
                 this.router.navigateByUrl('/')
                 return false
             }
             return true
        }
    }