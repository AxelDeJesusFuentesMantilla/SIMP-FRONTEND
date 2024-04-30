import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-laterales',
  templateUrl: './botones-laterales.component.html',
  styleUrls: ['./botones-laterales.component.css']
})
export class BotonesLateralesComponent {
  constructor(private route: Router) {
    
  }
  irAPagina(titulo: string):void{
    this.route.navigate([titulo]);

  }
}
