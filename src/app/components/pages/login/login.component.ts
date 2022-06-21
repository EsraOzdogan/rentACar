import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User
  loginForm:FormGroup;

  unSaved: boolean = true;        

  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService) { }


  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  // canDeactivate(): Observable<boolean> | boolean {
  //   if (this.unSaved) {
  //     const confirmResult = confirm('Are you sure you want to leave this ? ');
  //     return confirmResult
  //   }
  //   return true;
  // }

  login(){
    if(this.loginForm.valid){
      //console.log(this.loginForm.value);
     this.user = Object.assign({},this.loginForm.value)
      console.log(this.user)
      //this.unSaved = false

      this.authService.login(this.user).subscribe(data=>{
        if(data[0]){
          console.log(data[0])
          localStorage.setItem("token",data[0].email)
          this.toastrService.info("Başarılı")
        }else{
          //localStorage.removeItem(data[0].email)
          this.toastrService.error( "Başarısız")
        }
        
      })
    }
  }

}
