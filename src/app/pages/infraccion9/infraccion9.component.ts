import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-infraccion9',
  templateUrl: './infraccion9.component.html',
  styleUrls: ['./infraccion9.component.css']
})
export class Infraccion9Component {

  downloadPdf() {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 210]  // Formato de página cuadrada para el ejemplo
    });

    // Cargar e insertar el primer logo
    const imgData1 = 'assets/images/logo1.png';  // Asegúrate de tener el path correcto
    doc.addImage(imgData1, 'PNG', 10, 5, 20, 10);  // Cambia las dimensiones según sea necesario

    // Cargar e insertar el segundo logo


    // Texto de ejemplo y contenido del documento
    doc.setFont('helvetica', 'bold');
    doc.text('MOVILIA', 100, 10);  // Posición central superior del texto

    const contentElement = document.getElementById('content');
    const contentText = contentElement ? contentElement.innerText : '';

    doc.setFontSize(3);
    doc.text(contentText, 1, 20, {
      maxWidth: 7
    });

    // Guardar el PDF
    doc.save('Infraccion.pdf');
  }
}
