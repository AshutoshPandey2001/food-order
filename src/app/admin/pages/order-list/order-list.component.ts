import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css' ,'./../../admin-global.css']
})
export class OrderListComponent implements OnInit {

  constructor(private api:ApiService, public loginService:LoginService) { }

  orderData:any;
  itemCount:number = 0;
  getOrders(){
    this.api.getOrder().subscribe({
      next:data=>{
        console.warn(data.body[0]);
        this.orderData = data.body;
        this.itemCount = data.itemCount; 
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }
  deleteMsg:string = "";
  deleteOrder(id:number, status:number){
    if(status!==0){
      this.api.deleteOrder(id).subscribe({
        next:data=>{
          this.getOrders();
          window.scroll({ top: 0, left: 0, behavior: 'smooth'});
            this.deleteMsg = "One Order has been deleted";
            setTimeout(()=>{
              this.deleteMsg = "";
            },4000);
        },
        error: error=>{
          window.scroll({ top: 0, left: 0, behavior: 'smooth'});
            this.deleteMsg = error.message;
            setTimeout(()=>{
              this.deleteMsg = "";
            },4000);
        }
      })
    }else {
      window.scroll({ top: 0, left: 0, behavior: 'smooth'});
      this.deleteMsg = "Please delivered the food before delete order";
      setTimeout(()=>{
        this.deleteMsg = "";
      },4000);
    }
  }

  orderStatus(event:any, id:number){
    console.warn("value", event.target.value);
    console.warn("id", id);
    this.api.orderStatus(id,event.target.value).subscribe({
      next:data=>{
        this.getOrders();
        window.scroll({ top: 0, left: 0, behavior: 'smooth'});
          this.deleteMsg = "Order Status has been Updated";
          setTimeout(()=>{
            this.deleteMsg = "";
          },4000);
      },
      error: error=>{
        window.scroll({ top: 0, left: 0, behavior: 'smooth'});
          this.deleteMsg = error.message;
          setTimeout(()=>{
            this.deleteMsg = "";
          },4000);
      }
    })
  }

  editOrder(){
    window.scroll({ top: 0, left: 0, behavior: 'smooth'});
      this.deleteMsg = "This feature is only for super admin | thats is not implemented";
      setTimeout((  )=>{
        this.deleteMsg = "";
      },4000);
  }
  ngOnInit(): void {
    this.getOrders();
  }
}
