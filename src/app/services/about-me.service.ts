import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutMe } from '../models/AboutMe';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  rutaGlobal = "https://portfolio-back-end-wmxk.onrender.com/about-me/"

  constructor(private http: HttpClient) { }

  //Create aboutMe
  createAboutMe(aboutMe: AboutMe){
    return this.http.post<AboutMe>(this.rutaGlobal + 'new', aboutMe,  {
      observe: 'response'
    })
  }

  //Get aboutMe
  getAboutMeList(){
    return this.http.get<AboutMe[]>(this.rutaGlobal + 'all')
  }

  //Update aboutMe
  updateAboutMe(aboutMe: AboutMe){
    return this.http.post<AboutMe>(this.rutaGlobal + 'update', aboutMe, {
      observe: 'response'
    })
  }

  //Delete aboutMe
  deleteAboutMe(idAboutMe: number){
    return this.http.post<Boolean>(this.rutaGlobal + idAboutMe, {
      observe: 'response'
    })
  }
}
