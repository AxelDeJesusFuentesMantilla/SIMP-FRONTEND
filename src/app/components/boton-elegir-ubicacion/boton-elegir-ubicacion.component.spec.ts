import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonElegirUbicacionComponent } from './boton-elegir-ubicacion.component';

describe('BotonElegirUbicacionComponent', () => {
  let component: BotonElegirUbicacionComponent;
  let fixture: ComponentFixture<BotonElegirUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonElegirUbicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonElegirUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
