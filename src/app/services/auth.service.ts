import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  // login(loginModel:LoginModel){
  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"/users",loginModel)
  //   debugger
  // }

  // login(loginModel:User):Observable<User>{
  //   let newPath = this.apiUrl + "/users?email="
  //   return this.httpClient.get<User>(newPath+loginModel.email+"&&password="+ loginModel.password)
  //   debugger
  // }


  login(user:User):Observable<User>{
    //let newPath = this.apiUrl + "/users?email="
    return this.httpClient.get<User>(`http://localhost:3000/users?email=${user.email}&&password=${user.password}`)
  }

  register(registerModel: User): Observable<User> {
    //let newPath = this.apiUrl + "/users"
    return this.httpClient.post<User>( "https://localhost:3000/users", registerModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
