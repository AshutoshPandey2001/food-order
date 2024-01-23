import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, ) { }
  private url:any = " http://localhost/foodAPI/api/";
 

  
  // add new data method;
  addFood(data:any){
    return this.http.post<any>(this.url+"create.php?food=1",data).pipe(map((res:any)=>{
      return res;
    }));
  }
  addTeam(data:any){
    return this.http.post<any>(this.url+"create.php?admin=1",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  addOrder(data:any){
    return this.http.post<any>(this.url+"create.php?customer=1",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  addFeedback(data:any){
    return this.http.post<any>(this.url+"create.php?feedback=1",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  loginAdmin(data:any){
    return this.http.post<any>(this.url+"single_read.php?adminLogin=1",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  
  // get data method;
  getTeam(){
    return this.http.get<any>(this.url+"read.php?admin=1");
  }
  getFood(){
    return this.http.get<any>(this.url+"read.php?food=1");
  }
  getSalesFood(){
    return this.http.get<any>(this.url+"read.php?getSalesOrder=1");
  }
  getFoodLimit(){
    return this.http.get<any>(this.url+"read.php?foodLimit=1");
  }
  getOrder(){
    return this.http.get<any>(this.url+"read.php?customer=1");
  }
  getFeedback(){
    return this.http.get<any>(this.url+"read.php?feedback=1");
  }

  getOneFood(id:any){
    return this.http.get<any>(this.url+"single_read.php?food=1&id="+id);
  }  
  
  getOneTeam(email:any){
    return this.http.get<any>(this.url+"single_read.php?admin=1&email="+email);
  }
  getTrackOrderDetails(id:number){
    return this.http.get<any>(this.url+"single_read.php?customer=1&id="+id);
  }  
  
  // delete methods;
  deleteFood(id:number){
    return this.http.get<any>(this.url+"delete.php?food=1&food_id="+id);
  }
  deleteOrder(id:number){
    return this.http.get<any>(this.url+"delete.php?customer=1&customer_id="+id);
  }
  deleteFeedback(id:number){
    return this.http.get<any>(this.url+"delete.php?feedback=1&feedback_id="+id);
  }
  deleteMember(id:number){
    return this.http.get<any>(this.url+"delete.php?admin=1&admin_id="+id);
  }

  // update methods;
  updateFood(id:number, data:any){
    return this.http.post<any>(this.url+"update.php?food=1&food_id="+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }
  orderStatus(id:number, status:number){
    return this.http.get<any>(this.url+"update.php?orderStatus=1&id="+id+"&order_status="+status);
  }
}
