import { Component } from '@angular/core';
import { PricingComponent } from '../../pricing/pricing.component';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [PricingComponent],
  template: `
    <div class="page-wrapper">
      <app-pricing></app-pricing>
    </div>
  `,
  styles: [`
    .page-wrapper {
      padding-top: 80px;
    }
  `]
})
export class PricingPageComponent {}
