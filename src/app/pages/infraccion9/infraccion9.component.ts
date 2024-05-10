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
      format: 'a4'  // Formato de página estándar
    });

    // Encabezado del documento
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('MUNICIPIO DE MORELIA, MICH', 105, 20, { align: 'center' });
    doc.text('R.F.C. MMM850101634', 105, 25, { align: 'center' });
    doc.text('ALLENDE 403, COL. CENTRO C.P. 58000', 105, 30, { align: 'center' });
    doc.text('TESORERÍA MUNICIPAL', 105, 35, { align: 'center' });

    // Línea divisoria
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(10, 37, 200, 37);  // Ajusta la longitud de la línea según el tamaño de la página

    // Cuerpo del documento
    doc.setFontSize(10);
    doc.text('CONTRIBUYENTE:', 20, 45);
    doc.text('FUENTES MANTILLA AXEL DE JESUS', 70, 45);
    doc.text('DOMICILIO DEL CONTRIBUYENTE:', 20, 50);
    doc.text('Calle desconocida #1234', 70, 50);

    // Detalles de pago
    doc.text('CONCEPTOS', 20, 60);
    doc.text('IMPORTE', 150, 60, { align: 'right' });
    doc.text('MULTAS VARIAS', 20, 65);
    doc.text('$1,485.00', 150, 65, { align: 'right' });
    doc.text('DERECHOS DE LICENCIA', 20, 70);
    doc.text('$412.00', 150, 70, { align: 'right' });
    doc.text('OTROS APROVECHAMIENTOS', 20, 75);
    doc.text('$3.40', 150, 75, { align: 'right' });

    // Total
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL:', 140, 85);
    doc.text('$1,900.40', 150, 85, { align: 'right' });

    // Pie de página
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Este recibo es un comprobante de pago de la Tesorería Municipal', 105, 95, { align: 'center' });

    // Guardar el PDF
    doc.save('Infraccion.pdf');
  }
}
