import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];