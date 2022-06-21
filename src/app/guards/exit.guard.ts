import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CanComponentDeactivate> {

  unSaved: boolean = true;        

  constructor(private authService:AuthService,
    private toastrService:ToastrService,
     private router:Router){}


  canDeactivate(component: CanComponentDeactivate, 
    roucurrentRoutete: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const result = confirm('There are unsaved changes! Are you sure?');
      // if (result === true) {
      //   return true;
      //   } else {
      //   return false;
      //   }

      if (this.unSaved) {
        const confirmResult = window.confirm('Are you sure you want to leave this ? ');
        this.toastrService.info("Are you sure you want to leave this")
        return confirmResult && component.canDeactivate ? component.canDeactivate() : true;
      }
      return true;


      // if(!this.authService.isAuthenticated()){
      //   const confirmResult = confirm('Are you sure you want to leave this ? ');
      //   return confirmResult;
      // }else{
      //   //this.router.navigate(["login"])
      //   //this.toastrService.info("Sisteme giriş yapmalısınız")
      //   return true;
      // }
              

      //return component.canDeactivate ? component.canDeactivate() : true;
    }
}
