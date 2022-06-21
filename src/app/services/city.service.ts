import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  getCities():Observable<City[]>{
    let newPath = this.apiUrl +"/cities"
    return this.httpClient.get<City[]>(newPath)
  }


}
