import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit, AfterViewInit {
  stats = [
    {
      value: 0,
      target: 15000,
      suffix: '+',
      label: 'Students Enrolled',
      icon: '👨‍🎓'
    },
    {
      value: 0,
      target: 98,
      suffix: '%',
      label: 'Success Rate',
      icon: '🎯'
    },
    {
      value: 0,
      target: 500,
      suffix: '+',
      label: 'AI Projects Built',
      icon: '🚀'
    },
    {
      value: 0,
      target: 50,
      suffix: '+',
      label: 'Industry Partners',
      icon: '🤝'
    }
  ];

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.observeStats();
  }

  observeStats() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  animateCounters() {
    this.stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          stat.value = stat.target;
          clearInterval(timer);
        } else {
          stat.value = Math.floor(current);
        }
      }, duration / steps);
    });
  }
}
