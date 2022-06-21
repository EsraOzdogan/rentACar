import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdditionalService } from 'src/app/models/additionalService';
import { Car } from 'src/app/models/car';
import { AdditionalServicesService } from 'src/app/services/additional-services.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  cars:Car [] = []
  additionalServices:AdditionalService []= []

  constructor(private activatedRoute:ActivatedRoute, private carService : CarService, private additionalService : AdditionalServicesService,
    private cartService : CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        debugger
        this.getCarDetails(params["id"])
        this.getAdditionalServices();
      }
    })
  }

  getCarDetails(carId:number) {
    this.carService.getCarDetails(carId).subscribe(data=>{
      this.cars = data;
    })   
  }

  getAdditionalServices(){
    this.additionalService.getAdditionalService().subscribe(data=>{
      this.additionalServices = data;
      debugger
    })  
  }


  onAddService(service:AdditionalService){
        console.log(service)

    this.cartService.addToCartAdditionalSevices(service)
  }
   
}
