import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<Brand[]>{
    let newPath = this.apiUrl +"/brands"
    return this.httpClient.get<Brand[]>(newPath)
  }

  addBrand(brand:Brand):Observable<Brand>{
    let newPath = this.apiUrl + "/brands";
    return this.httpClient.post<Brand>(newPath,brand)
  }

  deleteBrand(id:number):Observable<Brand>{
    let newPath = this.apiUrl + "/brands/" + id;
    return this.httpClient.delete<Brand>(newPath)
  }

  updateBrand(brand : Brand):Observable<Brand>{
    let newPath = this.apiUrl + "/brands/" + brand.id;
    return this.httpClient.put<Brand>(newPath,brand)
  }
  
  // getBrandDetailsById(id : number):Observable<Brand>{
  //   let newPath = this.apiUrl + "/brands?id=";
  //   return this.httpClient.get<Brand>(newPath + id)
  // }

  getBrandDetailsById(id : number):Observable<Brand>{
    let newPath = this.apiUrl + "/brands/";
    return this.httpClient.get<Brand>(newPath+id)
  }
  
}
