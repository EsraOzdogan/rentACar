import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditionalService } from '../models/additionalService';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServicesService {

  apiUrl = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  getAdditionalService():Observable<AdditionalService[]>{
    let newPath = this.apiUrl +"/additionalServices"
    return this.httpClient.get<AdditionalService[]>(newPath)
  }

}
