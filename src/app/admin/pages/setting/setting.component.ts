import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css' ,'./../../admin-global.css']
})
export class SettingComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
