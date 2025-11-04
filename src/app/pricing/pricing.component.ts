import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  plans = [
    {
      name: 'Basic',
      price: '499',
      period: 'month',
      description: 'Perfect for beginners starting their AI journey',
      features: [
        'Access to all course materials',
        'Weekly live sessions',
        'Community forum access',
        'Basic project templates',
        'Email support',
        'Certificate of completion'
      ],
      popular: false,
      color: '#4facfe'
    },
    {
      name: 'Pro',
      price: '899',
      period: 'month',
      description: 'Most popular choice for serious learners',
      features: [
        'Everything in Basic',
        'Daily live coding sessions',
        '1-on-1 mentorship (2 hours/week)',
        'Advanced project portfolio',
        'Priority support',
        'Job placement assistance',
        'Lifetime course access',
        'Industry certificate'
      ],
      popular: true,
      color: '#667eea'
    },
    {
      name: 'Enterprise',
      price: '1499',
      period: 'month',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Unlimited 1-on-1 mentorship',
        'Custom learning path',
        'Team collaboration tools',
        'Dedicated account manager',
        'On-site workshops',
        'Custom projects',
        'API access to learning platform'
      ],
      popular: false,
      color: '#764ba2'
    }
  ];

  ngOnInit() {
    this.observePricingCards();
  }

  observePricingCards() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => observer.observe(card));
  }
}
