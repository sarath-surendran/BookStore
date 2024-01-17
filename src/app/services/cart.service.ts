import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:{[key: string]: number} ={}
  constructor() { 
    let storedCart = localStorage.getItem('cart')
    this.cart = storedCart ? JSON.parse(storedCart) : {};
  }

  addToCart(bookKey: string, quantity: number): void{
    if(this.cart[bookKey]){
      this.cart[bookKey] += quantity
    }
    else{
      this.cart[bookKey] = quantity
    }
    if (this.cart[bookKey] > 0){
      this.saveCart()
    }
    else{
      delete this.cart[bookKey]
      this.saveCart()
    }
    
  }
  private saveCart(): void{
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  
  isBookInCart(bookKey: string): boolean{
    if(this.cart[bookKey]){
      return true
    }
    else{
      return false
    }
  }

  getCart(){
    return this.cart
  }
}
