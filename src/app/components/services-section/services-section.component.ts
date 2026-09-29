import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  protected readonly services: ServiceItem[] = [
    { number: '01', title: 'Brand identity', description: 'Un’identità riconoscibile, coerente e pronta a crescere con il tuo business.', tags: 'Strategy · Naming · Visual system' },
    { number: '02', title: 'Digital experience', description: 'Siti e prodotti digitali chiari, veloci e piacevoli da usare.', tags: 'UX/UI · Web design · Development' },
    { number: '03', title: 'Content & campaigns', description: 'Parole e immagini che portano il tuo punto di vista nel posto giusto.', tags: 'Art direction · Copy · Social' },
  ];
}
