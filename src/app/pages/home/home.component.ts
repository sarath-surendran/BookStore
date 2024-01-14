import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  fictionBooks: any[] = []

  constructor(private bookservice: BooksService){}

  ngOnInit(): void {
    this.getFictionBooks()
  }
  getFictionBooks(){
    this.bookservice.getFiction().subscribe({
      next:(result)=>{console.log((result.items), "fictionbooks#"); this.fictionBooks = result.items},
      error:(error)=>{console.log(error, "fictionbookerror#");}
    })
  }

}
