import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Knowledge } from '../models/Knowledge';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {
  rutaGlobal = "http://localhost:8080/knowledge/"

  constructor(private http: HttpClient) { }

  //Create knowledge
  createKnowledge(knowledge: Knowledge){
    return this.http.post<Knowledge>(this.rutaGlobal + 'new', knowledge,  {
      observe: 'response'
    })
  }

  //Get knowledge
  getKnowledges(){
    return this.http.get<Knowledge[]>(this.rutaGlobal + 'all')
  }

  //Update knowledge
  updateKnowledge(knowledge: Knowledge){
    return this.http.post<Knowledge>(this.rutaGlobal + 'update', knowledge, {
      observe: 'response'
    })
  }

  //Delete knowledge
  deleteKnowledge(idKnowledge: number){
    return this.http.post<Boolean>(this.rutaGlobal + idKnowledge, {
      observe: 'response'
    })
  }
}
