import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
   
  storageCart:{[key: string]: number} ={}
  cart: any[] = []
  total: number = 0
  constructor(private cartService: CartService, private bookService: BooksService){}

  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems() {
    this.storageCart = this.cartService.getCart();
  
    for (let item in this.storageCart) {
      let quantity = this.storageCart[item]
      
      this.bookService.getBookDetails(item).subscribe({
        next: (result) => {
          const bookData: {id: string, title: string, author: string, cover: string, price: number, quantity: number } = {
            id: item,
            quantity: quantity,
            title: result.title,
            author: result.subject_people[0],
            cover: result.covers[0],
            price: result.revision > 100 ? result.revision : result.revision + 100
          };
          this.total += bookData.quantity * bookData.price
  
          this.cart.push(bookData);
        }
      });
    }
    // this.calculateTotal()
  }

  addQuantity(key: string){
    this.cartService.addToCart(key, 1)
    const foundBook = this.cart.find(book => book.id === key);
    if (foundBook) {
      foundBook.quantity += 1;
      // this.calculateTotal()
      this.total += foundBook.price
    }
    
    
    
  }

  minusQuantity(key: string): void{
    this.cartService.addToCart(key, -1)
    const foundBook = this.cart.find(book => book.id === key);
    if (foundBook) {
      foundBook.quantity -= 1;
      // this.calculateTotal()
      this.total -= foundBook.price
    }

  }

  calculateTotal() {
    this.total = this.cart.reduce((sum, book) => sum + (book.price * book.quantity), 0);
    console.log(this.total, "total##");
    
  }
  
 
  
}
