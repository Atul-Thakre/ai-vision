import { Component } from '@angular/core';
import { CurriculumComponent } from '../../curriculum/curriculum.component';

@Component({
  selector: 'app-curriculum-page',
  standalone: true,
  imports: [CurriculumComponent],
  template: `
    <div class="page-wrapper">
      <app-curriculum></app-curriculum>
    </div>
  `,
  styles: [`
    .page-wrapper {
      padding-top: 80px;
    }
  `]
})
export class CurriculumPageComponent {}
