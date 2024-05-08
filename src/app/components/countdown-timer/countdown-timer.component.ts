import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerService } from './countdown-timer.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  timeLeft!: number;
  progress: number = 100;

  constructor(private timerService: CountdownTimerService) {}

  ngOnInit() {
    // Se suscribe al observable que informa el tiempo restante
    this.subscription = this.timerService.getTimeLeft().subscribe(time => {
      this.timeLeft = time;
      // Actualiza la barra de progreso basada en el tiempo original (300 segundos)
      this.progress = (time / 300) * 100;
    });
    // Inicia el temporizador al cargar el componente
    this.timerService.startCountdown();
  }

  ngOnDestroy() {
    // Asegúrate de desuscribirte para evitar fugas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
