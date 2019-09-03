import { Component } from '@angular/core';
import { Authentictionservice} from './authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extramexicano';
  constructor(public auth: Authentictionservice){}
}
