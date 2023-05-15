import { Component } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectComponent {
  projects: Array<Project>

  constructor(private pService: ProjectService){
    this.projects = new Array<Project>()
  }

  //Get projects
  getProjects(){
    this.pService.getProjects().subscribe(res => {
      this.projects = res
    })
  }

  ngOnInit(){
    this.getProjects()
  }
}
