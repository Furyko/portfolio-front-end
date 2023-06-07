import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ExtraProject } from 'src/app/models/ExtraProject';
import { ExtraProjectService } from 'src/app/services/extra-project.service';

@Component({
  selector: 'app-extra-projects',
  templateUrl: './extra-projects.component.html',
  styleUrls: ['./extra-projects.component.css'],
  host: {
    class: "col"
  }
})
export class ExtraProjectsComponent {
  projects: Array<ExtraProject>
  projectForm: FormGroup
  updateProjectForm: FormGroup

  constructor(private fb: FormBuilder, private pService: ExtraProjectService){
    this.projects = new Array<ExtraProject>()
    this.projectForm = fb.group({
      idProject: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      previewImg: new FormControl('', [Validators.required]),
      urlRepo: new FormControl('', [Validators.required]),
      urlSite: new FormControl('', [Validators.required]),
    })
    this.updateProjectForm = fb.group({
      idProject: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      previewImg: new FormControl('', [Validators.required]),
      urlRepo: new FormControl('', [Validators.required]),
      urlSite: new FormControl('', [Validators.required]),
    })
  }

  //Create ExtraProject
  createExtraProject(){
    if(this.projectForm.valid){
      let project = new ExtraProject()
      project.idProject = this.projectForm.get('idProject')?.value
      project.description = this.projectForm.get('description')?.value
      project.name = this.projectForm.get('name')?.value
      project.previewImg = this.projectForm.get('previewImg')?.value
      project.urlRepo = this.projectForm.get('urlRepo')?.value
      project.urlSite = this.projectForm.get('urlSite')?.value
      this.pService.createExtraProject(project).subscribe(res => {
        this.getExtraProjects()
        this.projectForm.reset()
      })
    }
  }

  //Get ExtraProjects
  getExtraProjects(){
    this.pService.getExtraProjects().subscribe(res => {
      this.projects = res
    })
  }

  //Delete ExtraProjects
  deleteExtraProject(idProject: number){
    this.pService.deleteExtraProject(idProject).subscribe(res => {
      this.getExtraProjects()
    })
  }

  //Update ExtraProjects
  updateExtraProject(){
    if(this.updateProjectForm.valid){
      let project = new ExtraProject()
      project.idProject = this.updateProjectForm.get('idProject')?.value
      project.description = this.updateProjectForm.get('description')?.value
      project.name = this.updateProjectForm.get('name')?.value
      project.previewImg = this.updateProjectForm.get('previewImg')?.value
      project.urlRepo = this.updateProjectForm.get('urlRepo')?.value
      project.urlSite = this.updateProjectForm.get('urlSite')?.value
      this.pService.updateExtraProject(project).subscribe(res => {
        this.getExtraProjects()
      })
    }
  }

  setUpdateFormValues(project: ExtraProject){
    this.updateProjectForm.get('idProject')?.disable()
    this.updateProjectForm.get('idProject')?.setValue(project.idProject)
    this.updateProjectForm.get('description')?.setValue(project.description)
    this.updateProjectForm.get('name')?.setValue(project.name)
    this.updateProjectForm.get('previewImg')?.setValue(project.previewImg)
    this.updateProjectForm.get('urlRepo')?.setValue(project.urlRepo)
    this.updateProjectForm.get('urlSite')?.setValue(project.urlSite)
  }

  ngOnInit(){
    this.getExtraProjects()
  }
}
