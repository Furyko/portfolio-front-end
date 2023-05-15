import { Component } from '@angular/core';
import { Study } from 'src/app/models/Study';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent {
  studies: Array<Study>

  constructor(private sService: StudyService){
    this.studies = new Array<Study>()
  }

  //Get studies
  getStudies(){
    this.sService.getStudies().subscribe(res => {
      this.studies = res
    })
  }

  ngOnInit(){
    this.getStudies()
  }
}
