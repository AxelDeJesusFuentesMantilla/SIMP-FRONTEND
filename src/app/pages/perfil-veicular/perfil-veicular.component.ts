import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-veicular', // Esto debe coincidir con la etiqueta en app.component.html
  templateUrl: './perfil-veicular.component.html',
  styleUrls: ['./perfil-veicular.component.css']
})
export class PerfilVeicularComponent {

  leftHover: boolean = false;
rightHover: boolean = false;

onLeftPanelHover(): void {
  this.leftHover = true;
  this.rightHover = false;
}

onRightPanelHover(): void {
  this.rightHover = true;
  this.leftHover = false;
}

onMouseLeave(): void {
  this.leftHover = false;
  this.rightHover = false;
}
  }
