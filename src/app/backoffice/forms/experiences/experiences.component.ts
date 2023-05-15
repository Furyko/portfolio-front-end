import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experiences: Array<Experience>
  experienceForm: FormGroup
  updateExperienceForm: FormGroup

  constructor(private fb: FormBuilder, private eService: ExperienceService){
    this.experiences = new Array<Experience>()
    this.experienceForm = fb.group({
      idExperience: new FormControl('', [Validators.required]),
      projectName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
    this.updateExperienceForm = fb.group({
      idExperience: new FormControl('', [Validators.required]),
      projectName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  }

  //Create experience
  createExperience(){
    if(this.experienceForm.valid){
      let experience = new Experience()
      experience.idExperience = this.experienceForm.get('idExperience')?.value
      experience.projectName = this.experienceForm.get('projectName')?.value
      experience.description = this.experienceForm.get('description')?.value
      this.eService.createExperience(experience).subscribe(res => {
        this.getExperiences()
        this.experienceForm.reset()
      })
    }
  }

  //Get experiences
  getExperiences(){
    this.eService.getExperiences().subscribe(res => {
      this.experiences = res
    })
  }

  //Delete experiences
  deleteExperience(idExperience: number){
    this.eService.deleteExperience(idExperience).subscribe(res => {
      this.getExperiences()
    })
  }

  //Update experiences
  updateExperience(){
    if(this.updateExperienceForm.valid){
      let experience = new Experience()
      experience.idExperience = this.updateExperienceForm.get('idExperience')?.value
      experience.projectName = this.updateExperienceForm.get('projectName')?.value
      experience.description = this.updateExperienceForm.get('description')?.value
      this.eService.updateExperience(experience).subscribe(res => {
        this.getExperiences()
      })
    }
  }

  setUpdateFormValues(experience: Experience){
    this.updateExperienceForm.get('idExperience')?.disable()
    this.updateExperienceForm.get('idExperience')?.setValue(experience.idExperience)
    this.updateExperienceForm.get('projectName')?.setValue(experience.projectName)
    this.updateExperienceForm.get('description')?.setValue(experience.description)
  }

  ngOnInit(){
    this.getExperiences()
  }
}
