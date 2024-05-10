import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private currentIndex = 0; // Empezamos en la interfaz 1
  private interfaces = [
    '/infraccion-1',
    '/infraccion-2',
    '/infraccion-3',
    '/infraccion-8',
    '/infraccion-fotos',
    '/resumen-infraccion',
    // Puedes añadir más interfaces según sea necesario
  ];

  constructor(private router: Router) {}

  goToNextInterface() {
    console.log('Current index before:', this.currentIndex);
    this.currentIndex = (this.currentIndex + 1) % this.interfaces.length;
    console.log('Navigating to:', this.interfaces[this.currentIndex]);
    this.router.navigate([this.interfaces[this.currentIndex]]);
  }

  goToPreviousInterface() {
    console.log('atras service');
    this.currentIndex =
      (this.currentIndex - 1 + this.interfaces.length) % this.interfaces.length;
    this.router.navigate([this.interfaces[this.currentIndex]]);
  }
}
