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
  loading: Boolean

  constructor(private sService: StudyService){
    this.loading = false
    this.studies = new Array<Study>()
  }

  //Get studies
  getStudies(){
    this.loading = true
    this.sService.getStudies().subscribe(res => {
      this.studies = res
      this.loading = false
    })
  }

  ngOnInit(){
    this.getStudies()
  }
}
