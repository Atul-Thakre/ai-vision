import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit, AfterViewInit {
  features = [
    {
      icon: '🎯',
      title: 'Hands-On Projects',
      description: 'Build 15+ real-world AI projects from scratch. Apply your knowledge to solve actual industry problems.',
      color: '#667eea'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Instructors',
      description: 'Learn from AI researchers and engineers working at top tech companies with years of experience.',
      color: '#764ba2'
    },
    {
      icon: '🚀',
      title: 'Career Support',
      description: 'Get personalized career guidance, resume reviews, and interview preparation from industry mentors.',
      color: '#f093fb'
    },
    {
      icon: '💻',
      title: 'Live Coding Sessions',
      description: 'Participate in interactive live sessions where you code alongside instructors in real-time.',
      color: '#4facfe'
    },
    {
      icon: '🏆',
      title: 'Industry Certificate',
      description: 'Earn a recognized certificate upon completion to showcase your AI expertise to employers.',
      color: '#00f2fe'
    },
    {
      icon: '🤝',
      title: 'Community Access',
      description: 'Join a vibrant community of AI enthusiasts, collaborate on projects, and network with peers.',
      color: '#43e97b'
    }
  ];

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.observeFeatures();
  }

  observeFeatures() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => observer.observe(card));
  }
}