import { Component } from '@angular/core';
import { ExtraProject } from 'src/app/models/ExtraProject';
import { ExtraProjectService } from 'src/app/services/extra-project.service';

@Component({
  selector: 'app-extra-project',
  templateUrl: './extra-project.component.html',
  styleUrls: ['./extra-project.component.css']
})
export class ExtraProjectComponent {
  projects: Array<ExtraProject>
  loading: Boolean

  constructor(private pService: ExtraProjectService){
    this.projects = new Array<ExtraProject>()
    this.loading = false
  }

  //Get projects
  getExtraProjects(){
    this.loading = true
    this.pService.getExtraProjects().subscribe(res => {
      this.projects = res
      this.loading = false
    })
  }

  ngOnInit(){
    this.getExtraProjects()
  }
}
