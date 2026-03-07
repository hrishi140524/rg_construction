import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { ServicesComponent } from '../../features/services/services.component';
import { ProcessComponent } from '../../features/process/process.component';
import { MaterialComponent } from '../../features/material/material.component'; 
import { ProjectsComponent } from '../../features/projects/projects.component';
import { WhyChooseUsComponent } from '../../features/why-choose-us/why-choose-us.component';
import { ContactComponent } from '../../features/contact/contact.component';
import { TestimonialsComponent } from '../../features/testimonials/testimonials.component';
@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ServicesComponent, ProcessComponent, MaterialComponent, ProjectsComponent, WhyChooseUsComponent, ContactComponent, TestimonialsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
