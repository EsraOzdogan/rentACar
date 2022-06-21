import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-color',
  templateUrl: './edit-color.component.html',
  styleUrls: ['./edit-color.component.css']
})
export class EditColorComponent implements OnInit {

  colorEditForm: FormGroup;
  color:Color;

  constructor(private activatedRoute:ActivatedRoute, private formBuilder : FormBuilder, private colorService : ColorService,
    private toastrService :ToastrService) { }

  createColorEditForm(){
    this.colorEditForm = this.formBuilder.group({
      id:[this.color.id,Validators.required],
      name:[this.color.name,Validators.required],
      image:[this.color.image,Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getColorDetails(params["id"])
      }
    })
  }

  getColorDetails(colorId:number) {
    this.colorService.getColorDetailsById(colorId).subscribe(data=>{
      debugger
      this.color = data;
      this.createColorEditForm();
    })   

  }
 
  edit(){
    if(this.colorEditForm.valid){
      this.color = Object.assign({},this.colorEditForm.value) //formun degerini producta atayacak
    }
    this.colorService.updateColor(this.color).subscribe(data=>{
      //alert(data.name +"başarılıyla güncellendi")
      this.toastrService.success(data.name, "Başarılı")
      setTimeout(()=> {
        location.reload();
      },5000)
    })
  }


}
