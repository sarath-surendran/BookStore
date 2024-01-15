import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // private baseurl: string = "https://www.googleapis.com/books/v1/volumes"
  private baseurl: string = "https://openlibrary.org/"
  private apiKey: string = "AIzaSyCO_8Ml2eoJUXyuy5pxENLnWdH6UbRRn4A"

  constructor(private http: HttpClient) { }

  getFiction(): Observable<any>{
    return this.http.get(`${this.baseurl}subjects/fiction.json?limit=10`)
  }
  // getFiction(): Observable<any>{
  //   return this.http.get(`${this.baseurl}?q=subject:fiction&key=${this.apiKey}`)
  // }
  getArt(): Observable<any>{
    return this.http.get(`${this.baseurl}subjects/art.json?limit=10`)
  }
  getBusiness(): Observable<any>{
    return this.http.get(`${this.baseurl}subjects/business.json?limit=10`)
  }
  // getEducation(): Observable<any>{
  //   return this.http.get(`${this.baseurl}?q=subject:education&key=${this.apiKey}`)
  // }
  // getTravel(): Observable<any>{
  //   return this.http.get(`${this.baseurl}?q=subject:travel&key=${this.apiKey}`)
  // }
  getScience(): Observable<any>{
    return this.http.get(`${this.baseurl}subjects/science.json?limit=10`)
  }
  // getPsychology(): Observable<any>{
  //   return this.http.get(`${this.baseurl}?q=subject:psychology&key=${this.apiKey}`)
  // }
  // getMusic(): Observable<any>{
  //   return this.http.get(`${this.baseurl}?q=subject:music&key=${this.apiKey}`)
  // }
}
