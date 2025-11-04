import { Component } from '@angular/core';
import { ContactComponent } from '../../contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  template: `
    <div class="page-wrapper">
      <app-contact></app-contact>
    </div>
  `,
  styles: [`
    .page-wrapper {
      padding-top: 80px;
    }
  `]
})
export class ContactPageComponent {}
