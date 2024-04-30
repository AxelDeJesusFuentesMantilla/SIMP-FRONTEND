import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetreroSuperiorComponent } from './letrero-superior.component';

describe('LetreroSuperiorComponent', () => {
  let component: LetreroSuperiorComponent;
  let fixture: ComponentFixture<LetreroSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetreroSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetreroSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
