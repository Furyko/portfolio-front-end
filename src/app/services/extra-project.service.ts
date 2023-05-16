import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExtraProject } from '../models/ExtraProject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExtraProjectService {
  rutaGlobal = `${environment.url}/extra-project`

  constructor(private http: HttpClient) { }

  //Create ExtraProject
  createExtraProject(extraProject: ExtraProject){
    return this.http.post<ExtraProject>(this.rutaGlobal + 'new', extraProject,  {
      observe: 'response'
    })
  }

  //Get ExtraProject
  getExtraProjects(){
    return this.http.get<ExtraProject[]>(this.rutaGlobal + 'all')
  }

  //Update ExtraProject
  updateExtraProject(extraProject: ExtraProject){
    return this.http.post<ExtraProject>(this.rutaGlobal + 'update', extraProject, {
      observe: 'response'
    })
  }

  //Delete ExtraProject
  deleteExtraProject(idExtraProject: number){
    return this.http.post<Boolean>(this.rutaGlobal + idExtraProject, {
      observe: 'response'
    })
  }
}
