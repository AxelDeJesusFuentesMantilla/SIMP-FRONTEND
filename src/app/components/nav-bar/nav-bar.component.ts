import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  // Cualquier lógica adicional para la barra de navegación
  @Input() showTimer: boolean = true; // Propiedad de entrada para mostrar el temporizador
}
