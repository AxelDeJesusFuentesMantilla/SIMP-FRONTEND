import { Component } from '@angular/core';

@Component({
  selector: 'app-infraccion-fotos',
  templateUrl: './infraccion-fotos.component.html',
  styleUrls: ['./infraccion-fotos.component.css']
})
export class InfraccionFotosComponent {
  isPopupVisible = false;

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  takePhoto() {
    // Lógica para tomar la foto
  }

  chooseFromGallery() {
    // Lógica para elegir una foto de la galería
  }
}
