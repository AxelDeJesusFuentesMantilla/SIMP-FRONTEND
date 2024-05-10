import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-botones-laterales',
  templateUrl: './botones-laterales.component.html',
  styleUrls: ['./botones-laterales.component.css'],
})
export class BotonesLateralesComponent {
  constructor(public navigationService: NavigationService) {}

  goNext(): void {
    console.log("siguiente typescript");
    this.navigationService.goToNextInterface();
  }

  goBack(): void {
    console.log("atras typescript");
    this.navigationService.goToPreviousInterface();
  }
}
