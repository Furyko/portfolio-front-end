import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  rutaGlobal = `${environment.url}/project`

  constructor(private http: HttpClient) { }

  //Create project
  createProject(project: Project){
    return this.http.post<Project>(this.rutaGlobal + 'new', project,  {
      observe: 'response'
    })
  }

  //Get project
  getProjects(){
    return this.http.get<Project[]>(this.rutaGlobal + 'all')
  }

  //Update project
  updateProject(project: Project){
    return this.http.post<Project>(this.rutaGlobal + 'update', project, {
      observe: 'response'
    })
  }

  //Delete project
  deleteProject(idProject: number){
    return this.http.post<Boolean>(this.rutaGlobal + idProject, {
      observe: 'response'
    })
  }
}
