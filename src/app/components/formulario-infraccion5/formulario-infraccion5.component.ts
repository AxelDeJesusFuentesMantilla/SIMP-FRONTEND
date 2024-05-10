import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-infraccion5',
  templateUrl: './formulario-infraccion5.component.html',
  styleUrls: ['./formulario-infraccion5.component.css'],
})
export class FormularioInfraccion5Component {
  infractions = [];  // Almacena las infracciones
  showPopup = false; // Controla la visibilidad del popup


  constructor(private route: Router) {
    
  }
  irAPagina(titulo: string):void{
    this.route.navigate([titulo]);

  }

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

  mostrarTabla = false;
  mostrarBoton = true;
  
    // Método para alternar la visibilidad del popup
    toggleTable() {
      this.mostrarBoton = !this.mostrarBoton;
      this.mostrarTabla = !this.mostrarTabla;
    }
  
    // Método para añadir una infracción (necesitarías un formulario o algo similar en tu popup)
    addInfraction(description: string, code: string) {
     // this.infractions.push({ description, code });
      this.toggleTable(); // Opcional: cerrar el popup después de añadir
    }
  
    // Método para eliminar una infracción por índice
    removeInfraction(index: number) {
      this.infractions.splice(index, 1);
    }
 
}
