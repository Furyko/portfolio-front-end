import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  rutaGlobal = "http://localhost:8080/contact/"

  constructor(private http: HttpClient) { }

  //Create contact
  createContact(contact: Contact){
    return this.http.post<Contact>(this.rutaGlobal + 'new', contact,  {
      observe: 'response'
    })
  }

  //Get contact
  getContacts(){
    return this.http.get<Contact[]>(this.rutaGlobal + 'all')
  }

  //Update contact
  updateContact(contact: Contact){
    return this.http.post<Contact>(this.rutaGlobal + 'update', contact, {
      observe: 'response'
    })
  }

  //Delete contact
  deleteContact(idContact: number){
    return this.http.post<Boolean>(this.rutaGlobal + idContact, {
      observe: 'response'
    })
  }
}
