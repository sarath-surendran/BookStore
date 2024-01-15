import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  bookDetails: any = {}
  suggestedBooks: any[] = []
  constructor(private bookService: BooksService, private router: ActivatedRoute){}
  // ngOnInit(): void {
  //   let key = this.router.snapshot.paramMap.get('key')
  //   console.log(key, "key#");
  //   this.getBookDetails(key)
    
    
  // }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      let key = params['key'];
      console.log(key, "key#");
      this.getBookDetails(key);
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
}
