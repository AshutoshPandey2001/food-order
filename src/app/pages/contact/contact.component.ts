import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private api:ApiService) { }

  contactForm = new FormGroup({
    "firstname":new FormControl("", [Validators.required]),
    "lastname":new FormControl("", [Validators.required]),
    "number":new FormControl("", [Validators.required]),
    "email":new FormControl("", [Validators.required, Validators.email]),
    "feedback":new FormControl("", [Validators.required]),
  });

  get firstname(){
    return this.contactForm.get("firstname");
  }
  get lastname(){
    return this.contactForm.get("lastname");
  }
  get number(){
    return this.contactForm.get("number");
  }
  get email(){
    return this.contactForm.get("email");
  }  
  get feedback(){
    return this.contactForm.get("feedback");
  }

  message:string = "";
  addFeedback(){
    const formData  = new FormData();
    formData.append("name", this.contactForm.value.firstname +" "+ this.contactForm.value.lastname);
    formData.append("email", this.contactForm.value.email);
    formData.append("number", this.contactForm.value.number);
    formData.append("feedback", this.contactForm.value.feedback);
    this.api.addFeedback(formData).subscribe({
      next:data=>{
        this.contactForm.reset();
        this.message = "Thank You for connecting us, We'll sovled  you within 24 hours :)"
        setTimeout(()=>{
          this.message = "";
        },4000)
      },
      error:error=>{
        this.message = error.message;
        setTimeout(()=>{
          this.message = "";
        },4000)
      }
    })
  }

  ngOnInit(): void {
  }

}
