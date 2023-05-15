import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts: Array<Contact>

  constructor(private pService: ContactService){
    this.contacts = new Array<Contact>()
  }

  //Get contacts
  getContacts(){
    this.pService.getContacts().subscribe(res => {
      this.contacts = res
    })
  }

  ngOnInit(){
    this.getContacts()
  }
}
