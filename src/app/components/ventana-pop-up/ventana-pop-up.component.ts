import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana-pop-up',
  templateUrl: './ventana-pop-up.component.html',
  styleUrls: ['./ventana-pop-up.component.css']
})
export class VentanaPopUpComponent {
  isPopupVisible = false;

  togglePopup():void  {
    this.isPopupVisible = !this.isPopupVisible;
  }

  back() {
    // Lógica para regresar atras
  }


}