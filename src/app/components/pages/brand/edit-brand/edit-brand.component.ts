import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  brandEditForm: FormGroup;
  brand:Brand;

  constructor(private activatedRoute:ActivatedRoute, private formBuilder : FormBuilder, private brandService : BrandService,
    private toastrService :ToastrService ) { }

  createProductEditForm(){
    this.brandEditForm = this.formBuilder.group({
      id:[this.brand.id,Validators.required],
      name:[this.brand.name,Validators.required],
      image:[this.brand.image,Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getBrandDetails(params["id"])
      }
    })
  }

  getBrandDetails(brandId:number) {
    this.brandService.getBrandDetailsById(brandId).subscribe(data=>{
      debugger
      this.brand = data;
      //console.log(data[0].name)
      this.createProductEditForm();
    })   

  }
 
  edit(){
    if(this.brandEditForm.valid){
      this.brand = Object.assign({},this.brandEditForm.value) //formun degerini producta atayacak
      debugger
    }
    this.brandService.updateBrand(this.brand).subscribe(data=>{
      this.toastrService.success(data.name, " güncellendi")
      setTimeout(()=> {
        location.reload();
      },5000)
    })
  }


}
