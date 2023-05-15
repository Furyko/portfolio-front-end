import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Array<Project>
  projectForm: FormGroup

  constructor(private fb: FormBuilder, private pService: ProjectService){
    this.projects = new Array<Project>()
    this.projectForm = fb.group({
      idProject: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      previewImg: new FormControl('', [Validators.required]),
      urlRepo: new FormControl('', [Validators.required]),
      urlSite: new FormControl('', [Validators.required]),
    })
  }

  //Create project
  createProject(){
    if(this.projectForm.valid){
      let project = new Project()
      project.idProject = this.projectForm.get('idProject')?.value
      project.description = this.projectForm.get('description')?.value
      project.name = this.projectForm.get('name')?.value
      project.previewImg = this.projectForm.get('previewImg')?.value
      project.urlRepo = this.projectForm.get('urlRepo')?.value
      project.urlSite = this.projectForm.get('urlSite')?.value
      this.pService.createProject(project).subscribe(res => {
        this.getProjects()
        this.projectForm.reset()
      })
    }
  }

  //Get projects
  getProjects(){
    this.pService.getProjects().subscribe(res => {
      this.projects = res
    })
  }

  //Delete projects
  deleteProject(idProject: number){
    this.pService.deleteProject(idProject).subscribe(res => {
      this.getProjects()
    })
  }

  //Update projects
}
