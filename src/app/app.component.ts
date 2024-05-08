// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section: 'category' | 'manual' | null = null;

  showSection(section: 'category' | 'manual'): void {
    this.section = section;
  }
}
