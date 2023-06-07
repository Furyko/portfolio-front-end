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
  loading: Boolean

  constructor(private pService: ProjectService){
    this.projects = new Array<Project>()
    this.loading = false
  }

  //Get projects
  getProjects(){
    this.loading = true
    this.pService.getProjects().subscribe(res => {
      this.projects = res
      this.loading = false
    })
  }

  ngOnInit(){
    this.getProjects()
  }
}
