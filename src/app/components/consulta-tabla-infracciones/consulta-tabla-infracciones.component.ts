import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-tabla-infracciones',
  templateUrl: './consulta-tabla-infracciones.component.html',
  styleUrls: ['./consulta-tabla-infracciones.component.css'],
})
export class ConsultaTablaInfraccionesComponent {
  // Datos de ejemplo
  records: any[] = [
    {
      clave: '001',
      oficial: 'Juan Pérez',
      fecha: '2024-05-07',
      placaVehicular: 'XYZ123',
      tipoDeLicencia: 'Tipo 1',
      estado: 'Activo',
      accion: 'Editar',
    },
    {
      clave: '002',
      oficial: 'Ana Gómez',
      fecha: '2024-05-06',
      placaVehicular: 'ABC456',
      tipoDeLicencia: 'Tipo 2',
      estado: 'Inactivo',
      accion: 'Editar',
    },
  ];

  constructor() {}
  onRowClicked(record: any): void {
    console.log('Registro seleccionado:', record);
    // Aquí puedes agregar más lógica como abrir un modal, mostrar un detalle, etc.
  }
  // Método para editar un registro
  editRecord(record: any): void {
    // Aquí puedes agregar la lógica para manejar la edición
    console.log('Editar registro:', record);
    // Por ejemplo, podrías abrir un modal aquí o redirigir a una página de edición
  }
  // Métodos para manejar los datos (p.ej., agregar, eliminar registros) pueden ser añadidos aquí
}
