import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  carEditForm: FormGroup;
  car:Car;
  brands : Brand[]=[];
  colors : Color[]=[];

  constructor(private activatedRoute:ActivatedRoute, private formBuilder : FormBuilder, private carService : CarService,
    private brandService : BrandService, private colorService : ColorService, private toastrService :ToastrService) { }

  createCarEditForm(){
    this.carEditForm = this.formBuilder.group({
      id:[this.car.id,Validators.required],
      dailyPrice:[this.car.dailyPrice,Validators.required],
      description:[this.car.description,Validators.required],
      image:[this.car.image,Validators.required],
      brandId:[this.car.brandId,Validators.required],
      colorId:[this.car.colorId,Validators.required],
      brandName:[this.car.brandName],
      colorName:[this.car.colorName],
    });
  }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarDetails(params["id"])
      }
    })
  }

  getCarDetails(carId:number) {
    this.carService.getCarDetailsById(carId).subscribe(data=>{
      this.car = data;
      
      this.createCarEditForm();
    })   
  }

  getBrands(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands = data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(data=>{
      this.colors = data;
    })
  }
 
  edit(){
    if(this.carEditForm.valid){
      this.carEditForm.value.brandId = parseInt(this.carEditForm.value.brandId)
      this.carEditForm.value.colorId =parseInt(this.carEditForm.value.colorId)
      let selectedBrand = this.brands.find(element => element.id == this.carEditForm.value.brandId)
      let selectedColor = this.colors.find(element => element.id == this.carEditForm.value.colorId)
      this.carEditForm.value.brandName= selectedBrand.name
      this.carEditForm.value.colorName= selectedColor.name

      this.car = Object.assign({},this.carEditForm.value) //formun degerini producta atayacak
    }
    this.carService.updateCar(this.car).subscribe(data=>{
      this.toastrService.success(data.description, " güncellendi")
      setTimeout(()=> {
        location.reload();
      },5000)
    })
  }
}
