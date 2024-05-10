// src/app/category-selection/category-selection.component.ts
import { Component, OnInit } from '@angular/core';
import { InfraccionesService } from '../../infracciones.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css']
})
export class CategorySelectionComponent implements OnInit {
  categorias: string[] = [];
  infracciones: any[] = [];
  selectedCategoria: string = '';
  selectedInfraccion: any = null;
  showInfraccionDetails: boolean = false;  // Controla la visualización de los detalles

  constructor(private infraccionesService: InfraccionesService) {}

  ngOnInit(): void {
    this.categorias = this.infraccionesService.getCategorias();
  }

  onCategoriaChange(categoria: string): void {
    this.selectedCategoria = categoria;
    this.infracciones = this.infraccionesService.getInfraccionesPorCategoria(categoria);
    this.selectedInfraccion = null;
    this.showInfraccionDetails = false;  // Restablecer la visualización de detalles
  }

  registrarInfraccion(): void {
    this.showInfraccionDetails = true;  // Mostrar los detalles al hacer clic en el botón
  }
}
