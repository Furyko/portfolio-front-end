import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Study } from 'src/app/models/Study';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
  host: {
    class: "col"
  }
})
export class StudiesComponent {
  studies: Array<Study>
  studyForm: FormGroup
  updateStudyForm: FormGroup

  constructor(private fb: FormBuilder, private sService: StudyService){
    this.studies = new Array<Study>()
    this.studyForm = fb.group({
      idStudy: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      instituteName: new FormControl('', [Validators.required])
    })
    this.updateStudyForm = fb.group({
      idStudy: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      instituteName: new FormControl('', [Validators.required])
    })
  }

  //Create study
  createStudy(){
    if(this.studyForm.valid){
      let study = new Study()
      study.idStudy = this.studyForm.get('idStudy')?.value
      study.title = this.studyForm.get('title')?.value
      study.instituteName = this.studyForm.get('instituteName')?.value
      this.sService.createStudy(study).subscribe(res => {
        this.getStudies()
        this.studyForm.reset()
      })
    }
  }

  //Get studies
  getStudies(){
    this.sService.getStudies().subscribe(res => {
      this.studies = res
    })
  }

  //Delete study
  deleteStudy(idStudy: number){
    this.sService.deleteStudy(idStudy).subscribe(res => {
      this.getStudies()
    })
  }

  //Update studies
  updateStudy(){
    if(this.updateStudyForm.valid){
      let study = new Study()
      study.idStudy = this.updateStudyForm.get('idStudy')?.value
      study.title = this.updateStudyForm.get('title')?.value
      study.instituteName = this.updateStudyForm.get('instituteName')?.value
      this.sService.updateStudy(study).subscribe(res => {
        this.getStudies()
      })
    }
  }

  setUpdateFormValues(study: Study){
    this.updateStudyForm.get('idStudy')?.disable()
    this.updateStudyForm.get('idStudy')?.setValue(study.idStudy)
    this.updateStudyForm.get('title')?.setValue(study.title)
    this.updateStudyForm.get('instituteName')?.setValue(study.instituteName)
  }

  ngOnInit(){
    this.getStudies()
  }
}
