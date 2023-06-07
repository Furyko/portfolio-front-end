import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  host: {
    class: "col"
  }
})
export class ProjectsComponent {
  projects: Array<Project>
  projectForm: FormGroup
  updateProjectForm: FormGroup

  constructor(private fb: FormBuilder, private pService: ProjectService){
    this.projects = new Array<Project>()
    this.projectForm = fb.group({
      idProject: new FormControl(''),
      description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      previewImg: new FormControl(''),
      urlRepo: new FormControl('', [Validators.required, Validators.minLength(2)]),
      urlSite: new FormControl(''),
    })
    this.updateProjectForm = fb.group({
      idProject: new FormControl(''),
      description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      previewImg: new FormControl(''),
      urlRepo: new FormControl('', [Validators.required, Validators.minLength(2)]),
      urlSite: new FormControl(''),
    })
  }

  //Create form
  get name() {
    return this.projectForm.get('name');
  }

  get description() {
    return this.projectForm.get('description')!;
  }

  get urlRepo() {
    return this.projectForm.get('urlRepo')!;
  }

  // Update form
  get nameUpdate() {
    return this.updateProjectForm.get('name');
  }

  get descriptionUpdate() {
    return this.updateProjectForm.get('description')!;
  }

  get urlRepoUpdate() {
    return this.updateProjectForm.get('urlRepo')!;
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
  updateProject(){
    if(this.updateProjectForm.valid){
      let project = new Project()
      project.idProject = this.updateProjectForm.get('idProject')?.value
      project.description = this.updateProjectForm.get('description')?.value
      project.name = this.updateProjectForm.get('name')?.value
      project.previewImg = this.updateProjectForm.get('previewImg')?.value
      project.urlRepo = this.updateProjectForm.get('urlRepo')?.value
      project.urlSite = this.updateProjectForm.get('urlSite')?.value
      this.pService.updateProject(project).subscribe(res => {
        this.getProjects()
      })
    }
  }

  setUpdateFormValues(project: Project){
    this.updateProjectForm.get('idProject')?.disable()
    this.updateProjectForm.get('idProject')?.setValue(project.idProject)
    this.updateProjectForm.get('description')?.setValue(project.description)
    this.updateProjectForm.get('name')?.setValue(project.name)
    this.updateProjectForm.get('previewImg')?.setValue(project.previewImg)
    this.updateProjectForm.get('urlRepo')?.setValue(project.urlRepo)
    this.updateProjectForm.get('urlSite')?.setValue(project.urlSite)
  }

  ngOnInit(){
    this.getProjects()
  }
}
