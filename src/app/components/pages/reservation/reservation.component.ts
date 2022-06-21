import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  //billingInformationForm: FormGroup;

  cities : City[] = []
  constructor(private cityService : CityService, private formBuilder : FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.getCityNames();
    this.createReservationForm();

  }

  createReservationForm(){
    this.reservationForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      phoneNumber:["",Validators.required],
      cityId:[Validators.required],
      //cityName:[""],
      address:["",Validators.required],
      address2:["",Validators.required],
    });
  }


  getCityNames(){
    this.cityService.getCities().subscribe(data =>{
      this.cities = data;
      console.log(this.cities[1].id)
      debugger

    })
  }

  makeReservation(){
    if(this.reservationForm.valid){
    
      let reservation = Object.assign({},this.reservationForm.value) //formun degerini producta atayacak
      //this.getBrandNamesById(reservation)
      this.router.navigate([""])

     debugger
     
    
   }
    


  }
}
