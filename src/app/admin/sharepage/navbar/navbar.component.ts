import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './../../admin-global.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }
  logout(){
    this.login.logout();
  }
}
