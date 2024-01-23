import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService, private api:ApiService) { }
  foodData:any;

  getFood(){
    this.api.getFood().subscribe({
      next:data=>{
        console.warn(data);
        this.foodData = data.body;
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }
  ngOnInit(): void {
    // this.foodData = this.service.foodDetails;
    this.getFood();
  }

}
