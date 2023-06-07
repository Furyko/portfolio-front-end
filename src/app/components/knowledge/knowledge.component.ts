import { Component } from '@angular/core';
import { Knowledge } from 'src/app/models/Knowledge';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent {
  knowledges: Array<Knowledge>
  loading: Boolean

  constructor(private pService: KnowledgeService){
    this.knowledges = new Array<Knowledge>()
    this.loading = false
  }

  //Get knowledges
  getKnowledges(){
    this.loading = true
    this.pService.getKnowledges().subscribe(res => {
      this.knowledges = res
      this.loading = false
    })
  }

  ngOnInit(){
    this.getKnowledges()
  }
}
