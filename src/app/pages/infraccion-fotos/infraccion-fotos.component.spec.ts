import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraccionFotosComponent } from './infraccion-fotos.component';

describe('InfraccionFotosComponent', () => {
  let component: InfraccionFotosComponent;
  let fixture: ComponentFixture<InfraccionFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraccionFotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraccionFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
