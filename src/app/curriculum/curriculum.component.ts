import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent implements OnInit {
  modules = [
    {
      week: 'Week 1-2',
      title: 'Introduction to AI & Python Fundamentals',
      topics: [
        'AI Overview & Real-world Applications',
        'Python Programming Basics & Best Practices',
        'NumPy & Pandas for Data Science',
        'Data Visualization with Matplotlib & Seaborn',
        'Jupyter Notebooks & Development Environment',
        'Version Control with Git & GitHub'
      ],
      projects: ['Build a Data Analysis Dashboard', 'Create Interactive Visualizations'],
      duration: '15 hours',
      icon: '🐍',
      color: '#667eea',
      difficulty: 'Beginner'
    },
    {
      week: 'Week 3-4',
      title: 'Machine Learning Foundations',
      topics: [
        'Supervised vs Unsupervised Learning',
        'Linear & Logistic Regression',
        'Decision Trees & Random Forests',
        'Model Evaluation & Validation Techniques',
        'Cross-validation & Hyperparameter Tuning',
        'Feature Engineering & Selection'
      ],
      projects: ['House Price Prediction Model', 'Customer Churn Prediction'],
      duration: '18 hours',
      icon: '🤖',
      color: '#764ba2',
      difficulty: 'Intermediate'
    },
    {
      week: 'Week 5-6',
      title: 'Deep Learning & Neural Networks',
      topics: [
        'Neural Network Architecture & Design',
        'Backpropagation & Optimization Algorithms',
        'Convolutional Neural Networks (CNNs)',
        'Transfer Learning & Fine-tuning',
        'Regularization Techniques (Dropout, Batch Norm)',
        'TensorFlow & PyTorch Frameworks'
      ],
      projects: ['Image Classification System', 'Object Detection Application'],
      duration: '20 hours',
      icon: '🧠',
      color: '#f093fb',
      difficulty: 'Advanced'
    },
    {
      week: 'Week 7-8',
      title: 'Natural Language Processing',
      topics: [
        'Text Preprocessing & Tokenization',
        'Word Embeddings (Word2Vec, GloVe, FastText)',
        'Transformers & BERT Architecture',
        'Sentiment Analysis & Text Classification',
        'Named Entity Recognition (NER)',
        'Question Answering Systems'
      ],
      projects: ['Sentiment Analysis API', 'Chatbot with NLP'],
      duration: '18 hours',
      icon: '💬',
      color: '#4facfe',
      difficulty: 'Advanced'
    },
    {
      week: 'Week 9-10',
      title: 'Computer Vision & Advanced Topics',
      topics: [
        'Image Processing Fundamentals',
        'Object Detection (YOLO, R-CNN, SSD)',
        'Image Segmentation Techniques',
        'Face Recognition & Verification Systems',
        'Generative Adversarial Networks (GANs)',
        'Real-time Video Processing'
      ],
      projects: ['Face Recognition System', 'Real-time Object Detector'],
      duration: '20 hours',
      icon: '👁️',
      color: '#00f2fe',
      difficulty: 'Advanced'
    },
    {
      week: 'Week 11-12',
      title: 'AI Deployment & Capstone Project',
      topics: [
        'Model Deployment with Flask/FastAPI',
        'Cloud Deployment (AWS, GCP, Azure)',
        'MLOps Best Practices & CI/CD',
        'Model Monitoring & Performance Tracking',
        'Docker & Kubernetes for ML',
        'Final Capstone Project Presentation'
      ],
      projects: ['Deploy Production ML API', 'Complete Capstone Project'],
      duration: '25 hours',
      icon: '🚀',
      color: '#43e97b',
      difficulty: 'Expert'
    }
  ];

  expandedModule: number | null = null;

  ngOnInit() {
    this.observeModules();
  }

  toggleModule(index: number) {
    this.expandedModule = this.expandedModule === index ? null : index;
  }

  observeModules() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => observer.observe(card));
  }
}