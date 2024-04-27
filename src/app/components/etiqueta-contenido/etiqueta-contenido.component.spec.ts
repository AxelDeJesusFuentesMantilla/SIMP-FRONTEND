import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaContenidoComponent } from './etiqueta-contenido.component';

describe('EtiquetaContenidoComponent', () => {
  let component: EtiquetaContenidoComponent;
  let fixture: ComponentFixture<EtiquetaContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtiquetaContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
