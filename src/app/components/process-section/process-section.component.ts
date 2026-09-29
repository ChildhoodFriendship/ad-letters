import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-process-section',
  standalone: true,
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSectionComponent {}
