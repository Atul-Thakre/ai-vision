import { Component } from '@angular/core';
import { TeamComponent } from '../../team/team.component';

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [TeamComponent],
  template: `
    <div class="page-wrapper">
      <app-team></app-team>
    </div>
  `,
  styles: [`
    .page-wrapper {
      padding-top: 80px;
    }
  `]
})
export class TeamPageComponent {}
