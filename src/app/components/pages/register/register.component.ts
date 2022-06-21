import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { CanDeactivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User
  registerForm:FormGroup;

  //unSaved: boolean = true;        

 
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService,    private router: Router) { }

//  canDeactivate(): Observable<boolean> | boolean {


//         if (this.unSaved) {

//           const result = window.confirm('There are unsaved changes! Are you sure?');

//            return Observable.of(result);
//         }
//         return true;
//     }   

    // canDeactivate(): Observable<boolean> | boolean {
       
    //     if (this.unSaved) {
    //       const confirmResult = confirm('Are you sure you want to leave this ? ');
    //       return confirmResult
    //     }
    //     return true;
    //   }

    // canDeactivate(): Observable<boolean> | boolean {
    //   return true;
    // }

  ngOnInit(): void {
    this.createregisterForm();
  }
  createregisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName:["",Validators.required],
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
     let registerModel = Object.assign({},this.registerForm.value)
     //this.unSaved = false
      console.log(this.user)

      this.authService.register(registerModel).subscribe(data=>{
        console.log(data)
        debugger
        if(data[0]){
          console.log(data[0])
          localStorage.setItem("token",data[0].firstName)
          this.toastrService.info("Başarılı")
          this.router.navigate(['']);

        }else{
          //localStorage.removeItem(data[0].email)
          this.toastrService.error( "Başarısız")
        }
        
      })
    }
  }

}
