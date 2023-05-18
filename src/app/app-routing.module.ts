import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ProjectsComponent } from './backoffice/forms/projects/projects.component';
import { StudiesComponent } from './backoffice/forms/studies/studies.component';
import { KnowledgesComponent } from './backoffice/forms/knowledges/knowledges.component';
import { ExtraProjectsComponent } from './backoffice/forms/extra-projects/extra-projects.component';
import { ExperiencesComponent } from './backoffice/forms/experiences/experiences.component';
import { ContactsComponent } from './backoffice/forms/contacts/contacts.component';
import { AboutMeFormComponent } from './backoffice/forms/about-me-form/about-me-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'backoffice', 
    component: BackofficeComponent, 
    children: [
      { path: 'about-me', component: AboutMeFormComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'extra-projects', component: ExtraProjectsComponent },
      { path: 'studies', component: StudiesComponent },
      { path: 'knowledges', component: KnowledgesComponent },
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'contacts', component: ContactsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
