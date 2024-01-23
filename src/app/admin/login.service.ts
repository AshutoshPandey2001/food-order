import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn:boolean = false;
  adminName!:string;
  constructor(private api:ApiService){
      this.getOneTeam();
  }
  logout(){
      this.loggedIn = false;
      localStorage.setItem("isLogged", "false");
      localStorage.removeItem('sessionEmail');
       // localStorage.clear();
  }
  login(email:any){
      this.loggedIn=true;
      localStorage.setItem("isLogged", "true");
      const newLocal = "sessionEmail";
      localStorage.setItem(newLocal, email);        
  }

  isLogin(){
      if(localStorage.getItem("isLogged")==="true"){
          this.loggedIn = true;
          return true;
      }else {
          this.loggedIn = false;
          return false;
      }
  }
  // i have been called this method for acccess value of admin name and email in every admin page :)
  getOneTeam(){
    this.api.getOneTeam(localStorage.getItem("sessionEmail")).subscribe({
      next:data=>{
        this.adminName = data.body.name;
      },
      error: error=>{
        this.adminName = error.message;
      }
    })
  }
}
