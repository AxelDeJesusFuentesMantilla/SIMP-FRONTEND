import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaHorizontalComponent } from './linea-horizontal.component';

describe('LineaHorizontalComponent', () => {
  let component: LineaHorizontalComponent;
  let fixture: ComponentFixture<LineaHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
