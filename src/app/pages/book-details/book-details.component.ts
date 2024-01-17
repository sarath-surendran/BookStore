import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  bookDetails: any = {}
  suggestedBooks: any[] = []
  bookKey: string = ''
  constructor(private bookService: BooksService, private router: ActivatedRoute, private cart: CartService){}
  // ngOnInit(): void {
  //   let key = this.router.snapshot.paramMap.get('key')
  //   console.log(key, "key#");
  //   this.getBookDetails(key)
    
    
  // }
  isBookInCart: boolean = false
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      let key = params['key'];
      this.bookKey = key
      this.getBookDetails(key);
      let isBookInCart = this.cart.isBookInCart(this.bookKey)
      this.isBookInCart = isBookInCart
      console.log(isBookInCart, "isBookInCart##");
      
    });
  }
  
  
  getBookDetails(key: string | null){
    this.bookService.getBookDetails(key).subscribe({
      next:(result)=>{console.log(result, "details#@");
      this.bookDetails = result;
      // console.log(this.bookDetails.authors[0].author.key, "title###");
      
      this.getSuggestion()
    },
      error:(error)=>{console.error(error.message, "error");
      }
    })
    
  }
  getSuggestion(){
    
    
    this.bookService.getFiction().subscribe({
      next:(result)=>{console.log(result), "suggested##";
          this.suggestedBooks = result.works
          console.log(this.suggestedBooks, "suggested books##");
          
      }
    })
  }

  addToCart(){
    this.cart.addToCart(this.bookKey, 1)
  }

  
}
