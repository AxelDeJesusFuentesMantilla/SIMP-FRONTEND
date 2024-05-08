import { TestBed } from '@angular/core/testing';

import { InfraccionesService } from './infracciones.service';

describe('InfraccionesService', () => {
  let service: InfraccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfraccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
