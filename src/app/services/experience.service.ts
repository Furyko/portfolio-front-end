import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  rutaGlobal = "http://localhost:8080/experience/"

  constructor(private http: HttpClient) { }

  //Create experience
  createExperience(experience: Experience){
    return this.http.post<Experience>(this.rutaGlobal + 'new', experience,  {
      observe: 'response'
    })
  }

  //Get experience
  getExperiences(){
    return this.http.get<Experience[]>(this.rutaGlobal + 'all')
  }

  //Update experience
  updateExperience(experience: Experience){
    return this.http.post<Experience>(this.rutaGlobal + 'update', experience, {
      observe: 'response'
    })
  }

  //Delete experience
  deleteExperience(idExperience: number){
    return this.http.post<Boolean>(this.rutaGlobal + idExperience, {
      observe: 'response'
    })
  }
}
