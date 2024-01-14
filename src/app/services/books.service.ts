import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseurl: string = "https://www.googleapis.com/books/v1/volumes"
  private apiKey: string = "AIzaSyCO_8Ml2eoJUXyuy5pxENLnWdH6UbRRn4A"

  constructor(private http: HttpClient) { }

  getFiction(): Observable<any>{
    return this.http.get(`${this.baseurl}?q=subject:fiction&key=${this.apiKey}`)
  }
  getArt(): Observable<any>{
    return this.http.get(`${this.baseurl}?q=subject:art&key=${this.apiKey}`)
  }
  getBusiness(): Observable<any>{
    return this.http.get(`${this.baseurl}?q=subject:business&key=${this.apiKey}`)
  }
  getEducation(): Observable<any>{
    return this.http.get(`${this.baseurl}?q=subject:education&key=${this.apiKey}`)
  }
  getTravel(): Observable<any>{
    return this.http.get(`${this.baseurl}?q=subject:travel&key=${this.apiKey}`)
  }
  getScience(): Observable<any>{
    return this.http.get(`${this.baseurl}?q=subject:science&key=${this.apiKey}`)
  }
  getPsychology(): Observable<any>{
    return this.http.get(`${this.baseurl}?q=subject:psychology&key=${this.apiKey}`)
  }
  getMusic(): Observable<any>{
    return this.http.get(`${this.baseurl}?q=subject:music&key=${this.apiKey}`)
  }
}
