import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { UserLoginService } from '../services/user-login.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  projects: Array<Project>
  projectForm: FormGroup
  updateProjectForm: FormGroup
  authenticated: Boolean

  constructor(private fb: FormBuilder, private pService: ProjectService, private userLoginService: UserLoginService, private router: Router){
    this.authenticated = false
    this.projects = new Array<Project>()
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

  // Login validation
  isLogged(){
    let user = new User()
    user.userId = `${sessionStorage.getItem('userId')}`
    user.password = `${sessionStorage.getItem('password')}`
    this.userLoginService.userLogin(user).subscribe(data => {
      this.authenticated = true
    }, error => {
      this.authenticated = false
    })
  }

  // Logout function
  logoutUser() {
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('password')
    this.router.navigate(['/home']);

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
    this.isLogged()
    this.getProjects()
  }
}
