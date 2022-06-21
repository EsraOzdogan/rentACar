import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands : Brand [] = []
  activeBrandName?: string = '';
  activeColorName?: string = '';
  brandFilterText: string = '';
  colorFilterText: string = '';

  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands = data;
      debugger
    })
  }

  onEditBrand(brandId : number):void{
    window.location.href= '/edit-brand/'+ brandId;
  }

  isBrandSelected(brandName?: string): boolean {
    return this.activeBrandName === brandName;
  }

  isColorSelected(colorName?: string): boolean {
    return this.activeColorName === colorName;
  }
  
}
