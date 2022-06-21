import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand [] = []
  dataLoaded = false;
  filterText="";

  constructor(private brandService : BrandService, private toastrService :ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(data=>{
      this.brands = data
      this.dataLoaded = true;
    })   
  }

  onDeleteBrand(brandId : number){
    this.brandService.deleteBrand(brandId).subscribe(data=>{
      debugger
      this.toastrService.success(data.name, " silindi")
      setTimeout(()=> {
        location.reload();
      },5000)
    })  
  }
}
