import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<Car[]>{
    let newPath = this.apiUrl +"/cars"
    return this.httpClient.get<Car[]>(newPath)
  }
  addCar(Car:Car):Observable<Car>{
    let newPath = this.apiUrl + "/cars";
    return this.httpClient.post<Car>(newPath,Car)
  }

  deleteCar(id:number):Observable<Car>{
    let newPath = this.apiUrl + "/cars/" + id;
    return this.httpClient.delete<Car>(newPath)
  }

  updateCar(Car : Car):Observable<Car>{
    let newPath = this.apiUrl + "/cars/" + Car.id;
    debugger
    return this.httpClient.put<Car>(newPath,Car)
  }

  getCarDetailsById(id : number):Observable<Car>{
    let newPath = this.apiUrl + "/cars/";
    return this.httpClient.get<Car>(newPath+id)
  }

  getCarDetails(id : number):Observable<Car[]>{
    let newPath = this.apiUrl + "/cars?id=";
    return this.httpClient.get<Car[]>(newPath + id)
  }

}
