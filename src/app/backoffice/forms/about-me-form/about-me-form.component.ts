import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AboutMe } from 'src/app/models/AboutMe';
import { AboutMeService } from 'src/app/services/about-me.service';
import { ImageUploadResponse } from '../../../interfaces/upload-images.interface';

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
  file: any
  imageUrl: string
  uploading: boolean

  constructor(private fb: FormBuilder, private eService: AboutMeService){
    this.uploading = false
    this.imageUrl = ''
    this.aboutMeList = new AboutMe()
    this.updateAboutMeForm = fb.group({
      idAboutMe: 1,
      fullname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      presentation: new FormControl('', [Validators.required, Validators.minLength(2)]),
      profession: new FormControl('', [Validators.required, Validators.minLength(2)]),
      profilePhoto: new FormControl('', []),
    })
  }

  get fullname() {
    return this.updateAboutMeForm.get('fullname');
  }

  get presentation() {
    return this.updateAboutMeForm.get('presentation')!;
  }

  get profession() {
    return this.updateAboutMeForm.get('profession')!;
  }

  //Get aboutMeList by id
  getAboutMeListById(idAboutMe: number){
    this.eService.getAboutMeListById(idAboutMe).subscribe(res => {
      console.log('res',res)
      this.aboutMeList = res
      this.setUpdateFormValues(this.aboutMeList)
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
      aboutMe.profilePhoto = (this.imageUrl == '' ? this.aboutMeList?.profilePhoto : this.imageUrl)
      this.eService.updateAboutMe(aboutMe).subscribe(res => {
        this.getAboutMeListById(1)
      })
    }
  }

  onFileSelected(event: any) {
    this.uploading = true
    this.file = event.target.files[0];
    this.eService.uploadImage(this.file).subscribe((res: ImageUploadResponse) => {
      this.uploading = false
      this.imageUrl = res.data.image.url
      this.getAboutMeListById(1);
    });
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
  }
}
