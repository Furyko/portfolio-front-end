import { Component } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Array<Experience>

  constructor(private eService: ExperienceService){
    this.experiences = new Array<Experience>()
  }

  //Get experiences
  getExperiences(){
    this.eService.getExperiences().subscribe(res => {
      this.experiences = res
    })
  }

  ngOnInit(){
    this.getExperiences()
  }
}
