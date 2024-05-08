// src/app/manual-entry/manual-entry.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfraccionesService } from '../infracciones.service';

@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit {
  manualEntryForm: FormGroup;
  availableArticles!: string[];
  availableFractions!: any[];
  availableIncises!: string[];
  submittedData: any = null;  // Para almacenar y mostrar los datos del formulario

  constructor(
    private fb: FormBuilder,
    private infraccionesService: InfraccionesService
  ) {
    this.manualEntryForm = this.fb.group({
      article: ['', Validators.required],
      fraction: [''],
      incise: [''],
      reason: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.availableArticles = this.infraccionesService.getArticulos();
  }

  onArticleChange(): void {
    const selectedArticle = this.manualEntryForm.get('article')?.value;
    this.availableFractions = this.infraccionesService.getFracciones(selectedArticle);
    this.manualEntryForm.get('fraction')?.reset();
    this.manualEntryForm.get('incise')?.reset();
    this.availableIncises = [];
  }

  onFractionChange(): void {
    const selectedArticle = this.manualEntryForm.get('article')?.value;
    const selectedFraction = this.manualEntryForm.get('fraction')?.value;
    this.availableIncises = this.infraccionesService.getIncisos(selectedArticle, selectedFraction);
  }

  onSubmit() {
    if (this.manualEntryForm.valid) {
      this.submittedData = this.manualEntryForm.value;
      console.log('Form Data:', this.submittedData);
    } else {
      console.error('Form is not valid');
      this.submittedData = null;
    }
  }
}
