import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lead AI Instructor',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'PhD in Machine Learning from MIT. Former Senior Research Scientist at Google AI with 10+ years of experience in deep learning and computer vision.',
      expertise: ['Deep Learning', 'Computer Vision', 'Neural Architecture'],
      achievements: ['Published 50+ research papers', 'Led AI team at Google', 'TEDx Speaker'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Deep Learning Expert',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Former Tesla Autopilot Engineer. Specialized in autonomous systems and real-time computer vision with 8 years of industry experience.',
      expertise: ['Autonomous Systems', 'Real-time CV', 'PyTorch'],
      achievements: ['Built Tesla Autopilot features', '15+ patents', 'Kaggle Grandmaster'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'NLP Specialist',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'Led NLP teams at Amazon Alexa. Expert in transformers, large language models, and conversational AI with 12 years of experience.',
      expertise: ['NLP', 'Transformers', 'LLMs'],
      achievements: ['Built Alexa NLP features', 'ACL Best Paper Award', 'Open-source contributor'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'MLOps Architect',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      bio: 'Built ML infrastructure at Netflix serving 200M+ users. Expert in scalable ML systems, cloud deployment, and production ML.',
      expertise: ['MLOps', 'Cloud Architecture', 'Kubernetes'],
      achievements: ['Scaled Netflix ML systems', 'AWS Certified', 'Conference speaker'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  ngOnInit() {
    this.observeTeamCards();
  }

  observeTeamCards() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => observer.observe(card));
  }
}