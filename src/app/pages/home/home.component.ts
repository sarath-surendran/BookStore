import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  fictionBooks: any[] = []
  artBooks: any[] = []
  businessBooks: any[] = []
  educationBooks: any[] = []
  travelBooks: any[] = []
  scienceBooks: any[] = []
  psychologyBooks: any[] = []
  musicBooks: any[] = []

  constructor(private bookservice: BooksService){}

  ngOnInit(): void {
    this.getFictionBooks()
    this.getArtBooks()
    this.getBusinessBooks()
    // this.getEducationBooks()
    // this.getTravelBooks()
    this.getScienceBooks()
    // this.getPsychologyBooks()
    // this.getMusicBooks()
  }
  getArtBooks(){
    this.bookservice.getArt().subscribe({
      next:(result)=>{console.log((result.items), "Artbooks#"); this.artBooks = result.works},
      error:(error)=>{console.log(error, "Artbookerror#"); this.artBooks = []}
    })
  }

  getBusinessBooks(){
    this.bookservice.getBusiness().subscribe({
      next:(result)=>{console.log((result.items), "Businessbooks#"); this.businessBooks = result.works},
      error:(error)=>{console.log(error, "Businessbookerror#"); this.businessBooks = []}
    })
  }

  // getEducationBooks(){
  //   this.bookservice.getEducation().subscribe({
  //     next:(result)=>{console.log((result.items), "Educationbooks#"); this.educationBooks = result.items},
  //     error:(error)=>{console.log(error, "Educationbookerror#");this.educationBooks = []}
  //   })
  // }

  // getTravelBooks(){
  //   this.bookservice.getTravel().subscribe({
  //     next:(result)=>{console.log((result.items), "Travelbooks#"); this.travelBooks = result.items},
  //     error:(error)=>{console.log(error, "Travelbookerror#"); this.travelBooks = []}
  //   })
  // }

  getScienceBooks(){
    this.bookservice.getScience().subscribe({
      next:(result)=>{console.log((result.items), "Sciencebooks#"); this.scienceBooks = result.works},
      error:(error)=>{console.log(error, "Sciencebookerror#"); this.scienceBooks = []}
    })
  }

  // getPsychologyBooks(){
  //   this.bookservice.getPsychology().subscribe({
  //     next:(result)=>{console.log((result.items), "Psychologybooks#"); this.psychologyBooks = result.items},
  //     error:(error)=>{console.log(error, "Psychologybookerror#"); this.psychologyBooks = []}
  //   })
  // }

  // getMusicBooks(){
  //   this.bookservice.getMusic().subscribe({
  //     next:(result)=>{console.log((result.items), "Musicbooks#"); this.musicBooks = result.items},
  //     error:(error)=>{console.log(error, "Musicbookerror#"); this.musicBooks = []}
  //   })
  // }

  getFictionBooks(){
    this.bookservice.getFiction().subscribe({
      next:(result)=>{console.log((result.works), "fictionbooks#"); this.fictionBooks = result.works},
      error:(error)=>{console.log(error, "fictionbookerror#"); this.fictionBooks = []}
    })
  }
  

}
