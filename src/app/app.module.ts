import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/projects/projects.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { StudyComponent } from './components/study/study.component';
import { StudiesComponent } from './backoffice/forms/studies/studies.component';
import { ProjectsComponent } from './backoffice/forms/projects/projects.component';
import { BackofficeNavComponent } from './components/backoffice-nav/backoffice-nav.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { KnowledgesComponent } from './backoffice/forms/knowledges/knowledges.component';
import { ExtraProjectComponent } from './components/extra-project/extra-project.component';
import { ExtraProjectsComponent } from './backoffice/forms/extra-projects/extra-projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperiencesComponent } from './backoffice/forms/experiences/experiences.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './backoffice/forms/contacts/contacts.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent,
    LoginComponent,
    BackofficeComponent,
    StudyComponent,
    StudiesComponent,
    BackofficeNavComponent,
    ProjectsComponent,
    KnowledgeComponent,
    KnowledgesComponent,
    ExtraProjectComponent,
    ExtraProjectsComponent,
    ExperienceComponent,
    ExperiencesComponent,
    ContactComponent,
    ContactsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
