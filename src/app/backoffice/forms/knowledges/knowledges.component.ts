import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Knowledge } from 'src/app/models/Knowledge';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.css']
})
export class KnowledgesComponent {
  knowledges: Array<Knowledge>
  knowledgeForm: FormGroup
  updateKnowledgeForm: FormGroup

  constructor(private fb: FormBuilder, private pService: KnowledgeService){
    this.knowledges = new Array<Knowledge>()
    this.knowledgeForm = fb.group({
      idKnowledge: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      technologies: new FormControl('', [Validators.required]),
    })
    this.updateKnowledgeForm = fb.group({
      idKnowledge: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      technologies: new FormControl('', [Validators.required]),
    })
  }

  //Create knowledge
  createKnowledge(){
    if(this.knowledgeForm.valid){
      let knowledge = new Knowledge()
      knowledge.idKnowledge = this.knowledgeForm.get('idKnowledge')?.value
      knowledge.area = this.knowledgeForm.get('area')?.value
      knowledge.technologies = this.knowledgeForm.get('technologies')?.value
      this.pService.createKnowledge(knowledge).subscribe(res => {
        this.getKnowledges()
        this.knowledgeForm.reset()
      })
    }
  }

  //Get knowledges
  getKnowledges(){
    this.pService.getKnowledges().subscribe(res => {
      this.knowledges = res
    })
  }

  //Delete knowledges
  deleteKnowledge(idKnowledge: number){
    this.pService.deleteKnowledge(idKnowledge).subscribe(res => {
      this.getKnowledges()
    })
  }

  //Update knowledges
  updateKnowledge(){
    if(this.updateKnowledgeForm.valid){
      let knowledge = new Knowledge()
      knowledge.idKnowledge = this.updateKnowledgeForm.get('idKnowledge')?.value
      knowledge.area = this.updateKnowledgeForm.get('area')?.value
      knowledge.technologies = this.updateKnowledgeForm.get('technologies')?.value
      this.pService.updateKnowledge(knowledge).subscribe(res => {
        this.getKnowledges()
      })
    }
  }

  setUpdateFormValues(knowledge: Knowledge){
    this.updateKnowledgeForm.get('idKnowledge')?.disable()
    this.updateKnowledgeForm.get('idKnowledge')?.setValue(knowledge.idKnowledge)
    this.updateKnowledgeForm.get('area')?.setValue(knowledge.area)
    this.updateKnowledgeForm.get('technologies')?.setValue(knowledge.technologies)
  }

  ngOnInit(){
    this.getKnowledges()
  }
}
