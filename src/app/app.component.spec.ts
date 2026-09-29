import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the main landing page sections', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-hero-section')).toBeTruthy();
    expect(compiled.querySelector('#studio')).toBeTruthy();
    expect(compiled.querySelector('#approccio')).toBeTruthy();
    expect(compiled.querySelector('#lavori')).toBeTruthy();
    expect(compiled.querySelector('#booking')).toBeTruthy();
  });

  it('should expose the AD Letters brand in the page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('AD LETTERS');
  });
});
