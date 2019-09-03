import { Component, OnInit } from '@angular/core';
import { Authentictionservice } from 'src/app/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: Authentictionservice) { }

  ngOnInit() {
  }

}
