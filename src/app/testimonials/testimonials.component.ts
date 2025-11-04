import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'ML Engineer at Google',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      text: 'This course transformed my career! The hands-on projects and expert mentorship helped me land my dream job at Google. The curriculum is perfectly structured and covers everything you need to become an AI professional.',
      company: 'Google'
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist at Amazon',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      rating: 5,
      text: 'Best investment I\'ve made in my career. The instructors are world-class, and the community support is incredible. I went from zero AI knowledge to building production-ready models in just 12 weeks.',
      company: 'Amazon'
    },
    {
      name: 'Emily Rodriguez',
      role: 'AI Researcher at MIT',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
      text: 'The depth of knowledge and practical experience I gained here is unmatched. The course doesn\'t just teach theory - it prepares you for real-world AI challenges. Highly recommended for anyone serious about AI.',
      company: 'MIT'
    },
    {
      name: 'David Park',
      role: 'Senior AI Engineer at Tesla',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      rating: 5,
      text: 'Coming from a non-technical background, I was nervous about learning AI. But the instructors made complex concepts easy to understand. Now I\'m working on autonomous driving systems at Tesla!',
      company: 'Tesla'
    }
  ];

  currentIndex = 0;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
