import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  };

  courses = [
    'Complete AI Mastery Program',
    'Machine Learning Bootcamp',
    'Deep Learning Specialization',
    'NLP & Transformers',
    'Computer Vision Expert',
    'MLOps & Deployment'
  ];

  isSubmitting = false;
  isSubmitted = false;

  onSubmit() {
    if (this.isValidForm()) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.resetForm();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      }, 2000);
    }
  }

  isValidForm(): boolean {
    return !!(
      this.formData.name &&
      this.formData.email &&
      this.formData.phone &&
      this.formData.course
    );
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    };
  }
}
