import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AboutMe } from 'src/app/models/AboutMe';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me-form',
  templateUrl: './about-me-form.component.html',
  styleUrls: ['./about-me-form.component.css'],
  host: {
    class: "col"
  }
})
export class AboutMeFormComponent {
  aboutMeList: AboutMe | null
  updateAboutMeForm: FormGroup

  constructor(private fb: FormBuilder, private eService: AboutMeService){
    this.aboutMeList = new AboutMe()
    this.updateAboutMeForm = fb.group({
      idAboutMe: 1,
      fullname: new FormControl('', [Validators.required]),
      presentation: new FormControl('', [Validators.required]),
      profession: new FormControl('', [Validators.required]),
    })
  }

  //Get aboutMeList by id
  getAboutMeListById(idAboutMe: number){
    this.eService.getAboutMeListById(idAboutMe).subscribe(res => {
      console.log('res',res)
      this.aboutMeList = res
    })
  }

  //Delete aboutMeList
  deleteAboutMe(idAboutMe: number){
    this.eService.deleteAboutMe(idAboutMe).subscribe(res => {
      this.getAboutMeListById(1)
    })
  }

  //Update aboutMeList
  updateAboutMe(){
    console.log(this.updateAboutMeForm)
    if(this.updateAboutMeForm.valid){
      let aboutMe = new AboutMe()
      aboutMe.idAboutMe = 1
      aboutMe.fullname = this.updateAboutMeForm.get('fullname')?.value
      aboutMe.presentation = this.updateAboutMeForm.get('presentation')?.value
      aboutMe.profession = this.updateAboutMeForm.get('profession')?.value
      this.eService.updateAboutMe(aboutMe).subscribe(res => {
        this.getAboutMeListById(1)
      })
    }
  }

  setUpdateFormValues(aboutMe: AboutMe | null){
    console.log({aboutMe})
    this.updateAboutMeForm.get('idAboutMe')?.disable()
    this.updateAboutMeForm.get('idAboutMe')?.setValue(aboutMe?.idAboutMe)
    this.updateAboutMeForm.get('fullname')?.setValue(aboutMe?.fullname)
    this.updateAboutMeForm.get('presentation')?.setValue(aboutMe?.presentation)
    this.updateAboutMeForm.get('profession')?.setValue(aboutMe?.profession)
  }

  ngOnInit(){
    this.getAboutMeListById(1)
    this.setUpdateFormValues(this.aboutMeList)
  }
}
