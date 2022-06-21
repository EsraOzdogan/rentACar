import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private brandService : BrandService, private toastrService :ToastrService) { }

  brandAddForm: FormGroup;
  brand : Brand;

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      name:["",Validators.required],
      image:["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  add(){
    if(this.brandAddForm.valid){
      this.brand = Object.assign({},this.brandAddForm.value) //formun degerini producta atayacak
    }
    this.brandService.addBrand(this.brand).subscribe(data=>{
      this.toastrService.success(data.name, " eklendi")
      setTimeout(()=> {
        location.reload();
      },5000)
    })
  }

}
