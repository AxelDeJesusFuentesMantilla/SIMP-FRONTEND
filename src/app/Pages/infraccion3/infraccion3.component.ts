import { Component } from '@angular/core';

@Component({
  selector: 'app-infraccion3',
  templateUrl: './infraccion3.component.html',
  styleUrls: ['./infraccion3.component.css']
})
export class Infraccion3Component {
  title = 'SIMP-FRONTEND'; // Ensure this line is added
  
  section: 'category' | 'manual' | null = null;

  showSection(section: 'category' | 'manual'): void {
    this.section = section;
  }
  }

