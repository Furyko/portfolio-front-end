import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: Array<Contact>
  contactForm: FormGroup
  updateContactForm: FormGroup

  constructor(private fb: FormBuilder, private eService: ContactService){
    this.contacts = new Array<Contact>()
    this.contactForm = fb.group({
      idContact: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })
    this.updateContactForm = fb.group({
      idContact: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })
  }

  //Create contact
  createContact(){
    if(this.contactForm.valid){
      let contact = new Contact()
      contact.idContact = this.contactForm.get('idContact')?.value
      contact.data = this.contactForm.get('data')?.value
      contact.name = this.contactForm.get('name')?.value
      contact.url = this.contactForm.get('url')?.value
      this.eService.createContact(contact).subscribe(res => {
        this.getContacts()
        this.contactForm.reset()
      })
    }
  }

  //Get contacts
  getContacts(){
    this.eService.getContacts().subscribe(res => {
      this.contacts = res
    })
  }

  //Delete contacts
  deleteContact(idContact: number){
    this.eService.deleteContact(idContact).subscribe(res => {
      this.getContacts()
    })
  }

  //Update contacts
  updateContact(){
    if(this.updateContactForm.valid){
      let contact = new Contact()
      contact.idContact = this.updateContactForm.get('idContact')?.value
      contact.data = this.updateContactForm.get('data')?.value
      contact.name = this.updateContactForm.get('name')?.value
      contact.url = this.updateContactForm.get('url')?.value
      this.eService.updateContact(contact).subscribe(res => {
        this.getContacts()
      })
    }
  }

  setUpdateFormValues(contact: Contact){
    this.updateContactForm.get('idContact')?.disable()
    this.updateContactForm.get('idContact')?.setValue(contact.idContact)
    this.updateContactForm.get('data')?.setValue(contact.data)
    this.updateContactForm.get('name')?.setValue(contact.name)
    this.updateContactForm.get('url')?.setValue(contact.url)
  }

  ngOnInit(){
    this.getContacts()
  }
}
