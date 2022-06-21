import { Component, OnInit } from '@angular/core';
import { AdditionalCartItem } from 'src/app/models/additionalCartItem';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartItems2: AdditionalCartItem[] = [];
  total : number;
  constructor(private cartService :CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.cartItems = this.cartService.list();
    console.log(this.cartItems)
    this.cartItems.forEach(element => {
      //element.quantity
    });
    this.cartItems.forEach(element => {
      console.log(element.car.description)
    });

    this.cartItems2 = this.cartService.list2();
    this.cartItems2.forEach(element => {
      //console.log(element.additionalServices.price)
       this.total =+ element.additionalServices.price
       console.log(this.total)
    });

  }

}
