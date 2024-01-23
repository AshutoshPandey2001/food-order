import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css','./../../admin-global.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
