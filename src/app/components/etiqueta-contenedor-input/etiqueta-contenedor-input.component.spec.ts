import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaContenedorInputComponent } from './etiqueta-contenedor-input.component';

describe('EtiquetaContenedorInputComponent', () => {
  let component: EtiquetaContenedorInputComponent;
  let fixture: ComponentFixture<EtiquetaContenedorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtiquetaContenedorInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetaContenedorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
