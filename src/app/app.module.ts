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
    KnowledgeComponent
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
