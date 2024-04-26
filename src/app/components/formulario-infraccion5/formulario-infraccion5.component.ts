import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-infraccion5',
  templateUrl: './formulario-infraccion5.component.html',
  styleUrls: ['./formulario-infraccion5.component.css'],
})
export class FormularioInfraccion5Component {
  infracciones = [
    {
      folio: '',
      zona: '',
      motivo: '',
    },
  ];

  // Agrega una nueva infracción vacía a la lista
  agregarInfraccion(): void {
    this.infracciones.push({
      folio: '',
      zona: '',
      motivo: '',
    });
  }

  // Enviar o procesar las infracciones
  enviarInfracciones(): void {
    // Aquí puedes manejar la lógica para enviar las infracciones, por ejemplo, a un backend
  }

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
