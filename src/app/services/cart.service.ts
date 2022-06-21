import { Injectable } from '@angular/core';
import { AdditionalCartItem } from '../models/additionalCartItem';
import { AdditionalService } from '../models/additionalService';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems, CartItems2 } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.id===car.id); //sepette item varsa adedini bir arttır yokdsa 
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }

  addToCartAdditionalSevices( additionalServices:AdditionalService){
    let item = CartItems2.find(c=>c.additionalServices.id===additionalServices.id); 
    if(item){
      item.additionalQuantity+=1;
    }else{
      let additionalCartItem = new AdditionalCartItem();
      additionalCartItem.additionalServices = additionalServices;
      additionalCartItem.additionalQuantity =1;
      CartItems2.push(additionalCartItem)
    }
  }
  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=>c.car.id===car.id);
    CartItems.splice(CartItems.indexOf(item),1);     //jsde arrayde remove yok // git bellekteki yerini bulordan bir tane sil
  }

  list():CartItem[]{
    return CartItems;
  }

  list2():AdditionalCartItem[]{
    return CartItems2;
  }
}
