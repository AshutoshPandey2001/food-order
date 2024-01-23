import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {
  
  message:string  ="";
  orderData:any;
  orderFoodData:any;
  order_status!:string;


  constructor(private api:ApiService, private currentR:ActivatedRoute, private route:Router) { }

  
  searchForm = new FormGroup({
    "orderId":new FormControl("", [Validators.required])
  })
  
  orderId!:number; 
  searchOrder(){
    if(this.currentR.snapshot.fragment){
      this.orderId = parseInt((this.currentR.snapshot.fragment));
    }else {
      this.orderId = this.searchForm.value.orderId
    }
    this.api.getTrackOrderDetails(this.orderId).subscribe({
      next:data=>{
        console.warn(data);
        if(data.status==1){
          this.orderData = data.body;
          this.orderFoodData = data.food; 
          if(this.orderData.order_status==0){
            this.order_status = "Delivered";
          }else if(this.orderData.order_status==1){
            this.order_status = "Food on the way";
          }else if(this.orderData.order_status==2){
            this.order_status = "Order Confirmed";
          }else if(this.orderData.order_status==3){
            this.order_status = "Order Cancelled";
          }else if(this.orderData.order_status==4){
            this.order_status = "Processing..";
          }
          this.searchForm.reset();
        }else{
          // this.message = "Order id does not found or incorrect";
          alert("Order id does not  found in our record");
        }
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }
  closeOrder(){
    this.orderData = null;
    this.route.navigate(['track-order']);
    
  }
  ngOnInit(): void {
    if(this.currentR.snapshot.fragment){
      this.searchOrder();
    }
  }

}
