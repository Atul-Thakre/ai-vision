import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { FeaturesComponent } from '../../features/features.component';
import { StatsComponent } from '../../stats/stats.component';
import { CurriculumComponent } from '../../curriculum/curriculum.component';
import { TeamComponent } from '../../team/team.component';
import { TestimonialsComponent } from '../../testimonials/testimonials.component';
import { PricingComponent } from '../../pricing/pricing.component';
import { ContactComponent } from '../../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturesComponent,
    StatsComponent,
    CurriculumComponent,
    TeamComponent,
    TestimonialsComponent,
    PricingComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
