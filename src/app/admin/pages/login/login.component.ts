import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService, private login:LoginService, private route:Router) { }

  adminForm = new FormGroup({
    "email":new FormControl("admin@gmail.com", [Validators.required, Validators.email]),
    "password":new FormControl("123456", [Validators.required]),
  })
  formData = new FormData();
  message:string = "";

  get email(){
    return this.adminForm.get("email");
  }
  get password(){
    return this.adminForm.get("password");
  }
  
  loginAdmin(){
    this.formData.append("email", this.adminForm.value.email);
    this.formData.append("password", this.adminForm.value.password);
    this.api.loginAdmin(this.formData).subscribe({
      next:data=>{
        if(data.status==1){
          this.message = "Redirecting to dashbord page...";
          this.login.login(this.adminForm.value.email);
          setTimeout(()=>{
            this.route.navigate(['/dashboard']);
          }, 3000);
        }else {
          this.message = "Admin credentials is incorrect";
        }
        setTimeout(()=>{
          this.message = "";
        },4000);
      },
      error:error=>{
        this.message = "Error : " + error.message;
        setTimeout(()=>{
          this.message = "";
        },4000);
      }
    })
  }
  ngOnInit(): void {
    this.login.isLogin();
  }

}
