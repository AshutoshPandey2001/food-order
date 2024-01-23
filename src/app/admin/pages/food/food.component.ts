import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css', './../../admin-global.css']
})
export class FoodComponent implements OnInit {

  foodTable:boolean = true;
  addForm:boolean = false;
  showEditForm = false;

  editFormId!:any; 

  constructor(private api:ApiService, private top: ViewportScroller, private router:Router, public loginService:LoginService) { }

  //file upload dataType
  picture:boolean = false;
  showPicture:boolean = false;
  picutreUrl:any;
  pictureFile:any;

  imageProcessing(event:any){
    this.picture = true;
    this.pictureFile = event.target.files[0];
    if(event.target.files.length > 0 ){
      this.showPicture = true;
      this.picture = false;
      const reader = new FileReader();
      reader.onload = () => {
        this.picutreUrl= reader.result as string;
      }
      reader.readAsDataURL(this.pictureFile)
    }else {
      this.showPicture  = false;
      this.picture = true;
    }
  }

  addFoodForm = new FormGroup({
    "name": new FormControl("Pizza"),
    "price": new FormControl("20"),
    "description": new FormControl("description"),
  });

  get name(){
    return this.addFoodForm.get("name");
  }
  get price(){
    return this.addFoodForm.get("price");
  }
  get description(){
    return this.addFoodForm.get("description");
  }

  formData:any = new FormData();
  message:string = "";
  addFood(){
    this.formData.append("name", this.addFoodForm.value.name);
    this.formData.append("adminId", "0");
    this.formData.append("price", this.addFoodForm.value.price);
    this.formData.append("description", this.addFoodForm.value.description);
    this.formData.append("picture", this.pictureFile);
    this.api.addFood(this.formData).subscribe({
      next:data=>{
        this.getFood();
        this.backToTable();
        setTimeout(()=>{
          window.scroll({ top: 0, left: 0, behavior: 'smooth'});
        },2000);
        this.message = "Testy food has been added";
        setTimeout(()=>{
          this.message = "";
        },4000);
      },
      error:errorMessage=>{
        this.message = "Error : " + errorMessage.message;
        setTimeout(()=>{
          this.message = "";
        },4000);
      }
    });
  }

  foodData:any;
  itemCount!:number;
  getFood(){
    this.api.getFood().subscribe({
      next:data=>{
        this.foodData = data.body;
        this.itemCount = data.itemCount;
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }

  deleteFood(id:number){
    let food_id = id;
    this.api.deleteFood(food_id).subscribe({
      next:data=>{
        this.getFood();
        window.scroll({ top: 0, left: 0, behavior: 'smooth'});
        this.message = "One Food Has been deleted";
        setTimeout(()=>{
          this.message = "";
        },4000);
      },
      error: error=>{
        console.warn(error.message);
      }
    })
  }
  updateFormData = new FormData();
  updateFood(){
    this.updateFormData.append("name", this.addFoodForm.value.name);
    this.updateFormData.append("adminId", "0");
    this.updateFormData.append("price", this.addFoodForm.value.price);
    this.updateFormData.append("description", this.addFoodForm.value.description);
    this.updateFormData.append("picture", this.pictureFile);
    // this.updateFormData.append("food_id", this.editFormId );
    this.api.updateFood(this.editFormId, this.updateFormData).subscribe({
      next:data=>{
        this.getFood();
        this.backToTable();
        setTimeout(()=>{
          window.scroll({ top: 0, left: 0, behavior: 'smooth'});
        },2000);
        this.message = "Food Data has been updated";
        setTimeout(()=>{
          this.message = "";
        },4000);
      },
      error: error=>{
        this.message = "Error: "+ error.message ;
        console.warn(error.message);
        setTimeout(()=>{
          this.message = "";
        },4000)
      }
    })
  }

  routeEditForm(food_id:number){
    this.foodTable = false;
    this.addForm = false;
    this.showEditForm = true;
    this.editFormId = food_id;
    this.api.getOneFood(food_id).subscribe({
      next:data=>{
        this.addFoodForm.setValue({"name":data.body.name, "price":data.body.price, "description":data.body.short_description});
        this.picutreUrl = data.body.picture
        this.showPicture = true;
        this.picture = false;
      },
      error: error=>{
        console.warn(error.message);
      }
    });
  }
  backToTable(){
    this.foodTable = true;
    this.addForm = false;
    this.showEditForm = false;
    this.getFood();
  }
  addFoodPage(){
    this.foodTable = false;
    this.showEditForm = false;
    this.addForm = true;
  }

  ngOnInit(): void {
    this.getFood();
  }
}
