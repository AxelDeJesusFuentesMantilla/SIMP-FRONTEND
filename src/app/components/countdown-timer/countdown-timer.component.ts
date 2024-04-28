// countdown-timer.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { startWith, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public timeLeft: number = 300; // tiempo inicial en segundos (5 minutos)
  public displayTime: string='';
  public progress: number = 100; // Inicia la barra de progreso al 100%

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const initialTime = this.timeLeft;

    this.subscription = interval(1000)
      .pipe(
        startWith(0),
        takeWhile(() => this.timeLeft > 0)
      )
      .subscribe(() => {
        this.timeLeft -= 1;
        this.displayTime = this.formatTime(this.timeLeft);
        this.progress = (this.timeLeft / initialTime) * 100;
      });
  }

  formatTime(time: number): string {
    const hours: number = Math.floor(time / 3600);
    const minutes: number = Math.floor((time % 3600) / 60);
    const seconds: number = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
