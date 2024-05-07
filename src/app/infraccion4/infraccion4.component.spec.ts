import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infraccion4Component } from './infraccion4.component';

describe('Infraccion4Component', () => {
  let component: Infraccion4Component;
  let fixture: ComponentFixture<Infraccion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infraccion4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infraccion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
