import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color [] = []
  dataLoaded = false;
  filterText="";

  constructor(private colorService : ColorService, private toastrService :ToastrService) { }

  ngOnInit(): void {
    this.getColors();
  }

  
  getColors() {
    this.colorService.getColors().subscribe(data=>{
      this.colors = data
      this.dataLoaded = true;
    })   
  }

  onDeleteColor(colorId : number){
    this.colorService.deleteColor(colorId).subscribe(data=>{
      this.toastrService.success(data.name, " silindi")
      setTimeout(()=> {
        location.reload();
      },5000)
    })  
  }

}
