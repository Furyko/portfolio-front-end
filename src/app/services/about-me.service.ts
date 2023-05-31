import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutMe } from '../models/AboutMe';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  rutaGlobal = `${environment.url}/about-me/`

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

  //Get aboutMe by id
  getAboutMeListById(idAboutMe: number){
    return this.http.get<AboutMe>(this.rutaGlobal + idAboutMe, {
      observe: 'response'
    }).pipe(
      map(response => {
        return response.body
      })
    )
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
