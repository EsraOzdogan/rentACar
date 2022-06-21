import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car [] = []
  dataLoaded = false;
  filterText="";
  carId=0

  constructor(private carService : CarService, private activatedRoute:ActivatedRoute, private toastrService :ToastrService,
    private cartService : CartService,private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params=>{
    //   if(params["brandId"] && params["colorId"]){
    //     debugger
    //     this.getCarDetails(params["id"])

    //   }
    // })
   this.getCars();
  }


  getCarDetails(productId:number) {
    this.carService.getCarDetails(productId).subscribe(data=>{
      this.cars = data;
    })   
  }


  getCars() {
    this.carService.getCars().subscribe(data=>{
      this.cars = data
      this.dataLoaded = true;
    })   
  }

  onDeleteCar(carId : number){
    this.carService.deleteCar(carId).subscribe(data=>{
      this.toastrService.success(data.description, " silindi")
      setTimeout(()=> {
        location.reload();
      },5000)
    })  
  }

  addToCart(car:Car){
    console.log(car)
    this.cartService.addToCart(car)
  }

  openSm(content,carId:number) {
    this.carId = carId;
    this.modalService.open(content, { size: 'sm' });


    //this.modalService.open(content, { size: 'sm' });
    
  }

}
