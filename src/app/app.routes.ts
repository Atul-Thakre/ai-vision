import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'AI Vision - Master Artificial Intelligence'
  },
  {
    path: 'curriculum',
    loadComponent: () => import('./curriculum/curriculum.component').then(m => m.CurriculumComponent),
    title: 'Curriculum - AI Vision'
  },
  {
    path: 'team',
    loadComponent: () => import('./team/team.component').then(m => m.TeamComponent),
    title: 'Our Team - AI Vision'
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent),
    title: 'Pricing - AI Vision'
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - AI Vision'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];