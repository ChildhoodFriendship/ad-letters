import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProcessSectionComponent } from './components/process-section/process-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';

@Component({
  selector: 'app-root',
  imports: [
    ContactSectionComponent,
    HeroSectionComponent,
    ProcessSectionComponent,
    ServicesSectionComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    WorkSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly title = 'NOIR INK';
}
