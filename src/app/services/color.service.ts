import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  getColors():Observable<Color[]>{
    let newPath = this.apiUrl +"/colors"
    return this.httpClient.get<Color[]>(newPath)
  }
  addColor(color:Color):Observable<Color>{
    let newPath = this.apiUrl + "/colors";
    return this.httpClient.post<Color>(newPath,color)
  }

  deleteColor(id:number):Observable<Color>{
    let newPath = this.apiUrl + "/colors/" + id;
    return this.httpClient.delete<Color>(newPath)
  }

  updateColor(color : Color):Observable<Color>{
    let newPath = this.apiUrl + "/colors/" + color.id;
    debugger
    return this.httpClient.put<Color>(newPath,color)
  }

  getColorDetailsById(id : number):Observable<Color>{
    let newPath = this.apiUrl + "/colors/";
    return this.httpClient.get<Color>(newPath+id)
  }
}
