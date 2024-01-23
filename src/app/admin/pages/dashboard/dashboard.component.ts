import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./../../admin-global.css'],
  // encapsulation:ViewEncapsulation.None // i have write css styles classes in this component of <app-navbar> , 
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService, public loginService:LoginService) {
    // window.location.reload();
  }

  foodData:any;
  itemCount:number = 0;
  totalProfit:number = 0;
  getFood(){
    this.api.getFood().subscribe({
      next:data=>{
        this.foodData = data.body;
        this.itemCount = data.itemCount;
        for(let i = 0; i < data.body.length; i++){
          this.totalProfit += parseInt(data.body[i].price);  
        }
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }

  feedbackCount:number = 0;
  getfeedback(){
    this.api.getFeedback().subscribe({
      next:data=>{
        this.foodData = data.body;
        this.feedbackCount = data.itemCount;
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }

  SalesCount:number = 0;
  salesTotal:number = 0;
  salesData:any;
  totalSales(){
    this.api.getSalesFood().subscribe({
      next:data=>{
        this.salesData = data.body;
        this.SalesCount = data.itemCount;
        for(let i = 0; i < data.body.length; i++){
          this.salesTotal += parseInt(data.body[i].price);  
        }
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }
  adminName:string = "Reload Page";
  onSearch(){
    alert("not working yet");
    
  }
  ngOnInit(): void {
    this.getFood();
    this.totalSales();
    this.loginService.isLogin();
    this.getfeedback();
  }
  ngDoChecks(){
    
  }

}
