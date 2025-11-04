import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = {
    courses: [
      { name: 'Machine Learning', link: '#' },
      { name: 'Deep Learning', link: '#' },
      { name: 'NLP', link: '#' },
      { name: 'Computer Vision', link: '#' }
    ],
    company: [
      { name: 'About Us', link: '#' },
      { name: 'Careers', link: '#' },
      { name: 'Blog', link: '#' },
      { name: 'Press', link: '#' }
    ],
    support: [
      { name: 'Help Center', link: '#' },
      { name: 'Contact Us', link: '#' },
      { name: 'Privacy Policy', link: '#' },
      { name: 'Terms of Service', link: '#' }
    ]
  };
  
  socialLinks = [
    { name: 'LinkedIn', icon: 'in', link: '#' },
    { name: 'Twitter', icon: '𝕏', link: '#' },
    { name: 'GitHub', icon: '⚡', link: '#' },
    { name: 'YouTube', icon: '▶', link: '#' }
  ];
}