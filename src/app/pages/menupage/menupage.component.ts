import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private route:Router, private service:OrderDetailsService, private api:ApiService) { }
  menuData:any;

  orderForm = new FormGroup({
    "name": new FormControl("Sajdi", [Validators.required]),
    "address": new FormControl("H.no. 702, gali no. 11, kapshera, new delhi", [Validators.required]),
    "number": new FormControl("7065221377", [Validators.required]),
  })

  get name(){
    return this.orderForm.get("name");
  }
  get address(){
    return this.orderForm.get("address");
  }
  get number(){
    return this.orderForm.get("number");
  }
  
  message:string = "";
  placeOrder(id:any){
    const formData  = new FormData();
    formData.append("name", this.orderForm.value.name);
    formData.append("address", this.orderForm.value.address);
    formData.append("number", this.orderForm.value.number);
    formData.append("food_id",id);
    this.api.addOrder(formData).subscribe({
      next:data=>{
        this.message = "Your order has been Recieved, We'll soon contact you :)"
        console.warn(data);
        setTimeout(()=>{
          this.message = "";
          this.route.navigate(['track-order'], {fragment:data.last_id})
        },2000)
      },
      error:error=>{
        this.message = error.message;
        setTimeout(()=>{
          this.message = "";
        },4000)
      }
    })
  }
  food_id:any = 0;
  getFood(){
    let id = this.param.snapshot.paramMap.get('id');
    this.api.getOneFood(id).subscribe({
      next:data=>{
        console.warn(data);
        this.menuData = data.body;
        this.food_id = this.menuData.id;
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }

  ngOnInit(): void {
    this.getFood();
  }

}
