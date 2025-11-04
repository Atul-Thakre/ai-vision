import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit {
  stats = [
    { value: '10,000+', label: 'Students Enrolled' },
    { value: '95%', label: 'Success Rate' },
    { value: '50+', label: 'AI Projects' },
    { value: '4.9/5', label: 'Average Rating' }
  ];

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.animateStats();
    this.initParticles();
  }

  animateStats() {
    const statElements = document.querySelectorAll('.stat-value');
    statElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * 200);
    });
  }

  initParticles() {
    // Particle animation initialization
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(108, 92, 231, 0.5)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  scrollToFeatures() {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}