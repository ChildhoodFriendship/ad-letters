import { ChangeDetectionStrategy, Component } from '@angular/core';

interface WorkItem { title: string; category: string; image: string; tone: string; }

@Component({
  selector: 'app-work-section',
  standalone: true,
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkSectionComponent {
  protected readonly work: WorkItem[] = [
    { title: 'NOVA / Reframing everyday', category: 'Brand identity', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80', tone: 'lilac' },
    { title: 'KIN / Made for movement', category: 'Digital experience', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80', tone: 'sand' },
  ];
}
