import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  constructor(private formBuilder : FormBuilder, private carService : CarService, 
    private brandService : BrandService, private colorService : ColorService, private toastrService :ToastrService) { }

  carAddForm: FormGroup;
  car : Car;
  brands : Brand[]=[];
  colors : Color[]=[];
  brandName : string;
  colorName : string;


  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
      image:["../assets/logos/",Validators.required],
      brandId:[Validators.required],
      colorId:[Validators.required],
      brandName:[""],
      colorName:[""],
    });
  }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createCarAddForm();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(data=>{
      debugger
      this.brands = data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(data=>{
      debugger

      this.colors = data;
    })
  }

  getBrandNamesById(id){
    this.brandService.getBrandDetailsById(id).subscribe(data=>{
      this.car.brandName = data.name
      this.car.brandId = data.id
      //this.car.brandName = this.brandName
     // this.car.brandName = data.name
      console.log(this.car)
      debugger
      this.getColorNamesById(this.car.colorId)

      
    })
  }

  getColorNamesById(id){
    this.colorService.getColorDetailsById(id).subscribe(data=>{
      this.colorName = data.name
      this.car.colorName = this.colorName
      this.car.colorId = data.id
      debugger
      
    this.carService.addCar(this.car).subscribe(data=>{
      this.toastrService.success(data.description, " eklendi")
      setTimeout(()=> {
        location.reload();
      },5000)
    })
    })
  }
  add(){
    if(this.carAddForm.valid){
      // let selectedBrand = this.brands.find(element => element.id == this.carAddForm.value.brandId)
      // let selectedColor = this.colors.find(element => element.id == this.carAddForm.value.colorId)
      // this.carAddForm.value.brandId= selectedBrand.id
      // this.carAddForm.value.brandName= selectedBrand.name
 
      // this.carAddForm.value.colorId= selectedColor.id
      // this.carAddForm.value.colorName= selectedColor.name
      this.car = Object.assign({},this.carAddForm.value) //formun degerini producta atayacak
      this.getBrandNamesById(this.car.brandId)
     debugger
    
     this.carAddForm.value.brandId
    //  this.carService.addCar(this.car).subscribe(data=>{
    //   alert(data +"başarılıyla eklendi")
    //   location.reload();
    // })
   }
    


  }
}
