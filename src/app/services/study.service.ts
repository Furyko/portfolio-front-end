import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Study } from '../models/Study';

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  rutaGlobal = "https://portfolio-back-end-wmxk.onrender.com/study/"

  constructor(private http: HttpClient) { }

  //Create study
  createStudy(study: Study){
    return this.http.post<Study>(this.rutaGlobal + 'new', study,  {
      observe: 'response'
    })
  }

  //Get study
  getStudies(){
    return this.http.get<Study[]>(this.rutaGlobal + 'all')
  }

  //Update study
  updateStudy(study: Study){
    return this.http.post<Study>(this.rutaGlobal + 'update', study, {
      observe: 'response'
    })
  }

  //Delete study
  deleteStudy(idStudy: number){
    return this.http.post<Boolean>(this.rutaGlobal + idStudy, {
      observe: 'response'
    })
  }
}
