import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-infraccion9',
  templateUrl: './infraccion9.component.html',
  styleUrls: ['./infraccion9.component.css']
})
export class Infraccion9Component {

  downloadPdf() {
    const doc = new jsPDF();

    // Suponiendo que el texto que quieres imprimir está en un elemento con el ID 'content'
    const content = document.getElementById('content')?.innerText;

    doc.text(content || '', 10, 10);
    doc.save('Infraccion.pdf');
  }
}
