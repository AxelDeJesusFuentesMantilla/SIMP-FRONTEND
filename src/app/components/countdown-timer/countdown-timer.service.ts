// countdown-timer.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {
  private _timeLeft = new BehaviorSubject<number>(300);  // Tiempo inicial
  private _intervalId: any;

  constructor() { }

  startCountdown() {
    if (!this._intervalId) {
      this._intervalId = setInterval(() => {
        const currentTime = this._timeLeft.value;
        if (currentTime > 0) {
          this._timeLeft.next(currentTime - 1);
        } else {
          this.stopCountdown();
        }
      }, 1000);
    }
  }

  stopCountdown() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  getTimeLeft() {
    return this._timeLeft.asObservable();
  }

  resetTimer() {
    this._timeLeft.next(300); // Resetear a 5 minutos
    this.startCountdown();
  }
}
