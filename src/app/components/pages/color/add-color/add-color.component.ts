import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private colorService : ColorService, private toastrService :ToastrService) { }

  colorAddForm: FormGroup;
  color : Color;

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      name:["../assets/colors/",Validators.required],
    });
  }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  add(){
    if(this.colorAddForm.valid){
      this.color = Object.assign({},this.colorAddForm.value) //formun degerini producta atayacak
    }
    this.colorService.addColor(this.color).subscribe(data=>{
      //alert(data.name +"başarılıyla eklendi");
      this.toastrService.success(data.name, " eklendi")
      setTimeout(()=> {
        location.reload();
      },5000)
    })
  }

}
