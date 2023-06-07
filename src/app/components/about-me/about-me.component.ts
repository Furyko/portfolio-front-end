import { Component } from '@angular/core';
import { AboutMe } from 'src/app/models/AboutMe';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  aboutMeList: Array<AboutMe>
  loading: Boolean

  constructor(private pService: AboutMeService){
    this.loading = false
    this.aboutMeList = new Array<AboutMe>()
  }

  //Get about me list
  getAboutMeList(){
    this.loading = true
    this.pService.getAboutMeList().subscribe(res => {
      this.aboutMeList = res
      this.loading = false
    })
  }

  ngOnInit(){
    this.getAboutMeList()
  }
}
