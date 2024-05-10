import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Infraccion3Component } from './infraccion3.component';

describe('Infraccion3Componet', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Infraccion3Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Infraccion3Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SIMP-FRONTEND'`, () => {
    const fixture = TestBed.createComponent(Infraccion3Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SIMP-FRONTEND');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Infraccion3Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('SIMP-FRONTEND app is running!');
  });
});
