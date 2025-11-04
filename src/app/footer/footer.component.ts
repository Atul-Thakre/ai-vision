import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = {
    courses: [
      { name: 'Machine Learning', link: '/curriculum' },
      { name: 'Deep Learning', link: '/curriculum' },
      { name: 'NLP', link: '/curriculum' },
      { name: 'Computer Vision', link: '/curriculum' }
    ],
    company: [
      { name: 'About Us', link: '/team' },
      { name: 'Careers', link: '/contact' },
      { name: 'Blog', link: '/' },
      { name: 'Press', link: '/contact' }
    ],
    support: [
      { name: 'Help Center', link: '/contact' },
      { name: 'Contact Us', link: '/contact' },
      { name: 'Privacy Policy', link: '/' },
      { name: 'Terms of Service', link: '/' }
    ]
  };
  
  socialLinks = [
    { name: 'LinkedIn', icon: 'in', link: '#' },
    { name: 'Twitter', icon: '𝕏', link: '#' },
    { name: 'GitHub', icon: '⚡', link: '#' },
    { name: 'YouTube', icon: '▶', link: '#' }
  ];
}