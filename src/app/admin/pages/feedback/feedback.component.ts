import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css','./../../admin-global.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private api:ApiService, public loginService:LoginService) { }

  // delete method will be work only for super admih .....
  deleteMsg:string = "";
  deleteFeedback(id:number, status:number){
    if(status==2){
      this.api.deleteFeedback(id).subscribe({
        next:data=>{
          this.getFeedback();
          window.scroll({ top: 0, left: 0, behavior: 'smooth'});
          this.deleteMsg = "One Feedback has been deleted";
        },
        error: error=>{
          // console.warn(error.message);
          window.scroll({ top: 0, left: 0, behavior: 'smooth'});
          this.deleteMsg = error.message;
        }
      });
    }else {
      this.deleteMsg = "Please resolved the first before delete thats feedback";
    }
    setTimeout(()=>{
      this.deleteMsg = "";
    },4000);
  }

  feedbackData:any;
  itemCount!:number;
  getFeedback(){
    this.api.getFeedback().subscribe({
      next:data=>{ 
        this.feedbackData = data.body;
        this.itemCount = data;
      },
      error: error=>{
        // window.scroll({ top: 0, left: 0, behavior: 'smooth'});
        this.deleteMsg = "Error " + error.message;
        setTimeout(()=>{
          this.deleteMsg = "";
        },10000)
      }
    })
  }

  updateFeedback(){
   this.deleteMsg  = "This is feature for super-admin | thats is not implemented yet"; 
   setTimeout(()=>{
    this.deleteMsg = "";
  },4000)
  }

  ngOnInit(): void {
    this.getFeedback();
  }
}
