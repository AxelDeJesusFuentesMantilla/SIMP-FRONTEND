// src/app/infracciones.service.ts
import { Injectable } from '@angular/core';
import { Articulo, Fraccion } from './models/articulo.model';

interface Infraccion {
  nombre: string;
  articulo: string;
  fraccion: string;
  inciso: string;
}
interface Categoria {
  [categoria: string]: Infraccion[];
}

@Injectable({
  providedIn: 'root'
})


export class InfraccionesService {

   private categorias: Categoria = {
    'Control Vehicular': [
      { nombre: 'No presentar Tarjeta de Circulación', articulo: 'Art. 32', fraccion: 'I', inciso: 'a' },
      { nombre: 'No portar holograma de circulación', articulo: 'Art. 33', fraccion: 'II', inciso: 'b' },
      { nombre: 'Circular sin placas', articulo: 'Art. 47', fraccion: 'VII', inciso: 'd' },
      // Más infracciones
    ],
    'Equipo para la Circulación de Vehículos': [
      { nombre: 'Parabrisas estrellado', articulo: 'Art. 35', fraccion: 'II', inciso: '' },
      // Más infracciones
    ],
    // Más categorías...
  };

  getCategorias(): string[] {
    return Object.keys(this.categorias);
  }

  getInfraccionesPorCategoria(categoria: string): Infraccion[] {
    return this.categorias[categoria] || [];
  }


  private articulos: Articulo = {
    'Art.32 CONTROL VEHICULAR': {
      fracciones: [
        { 
          nombre: "Fracción I", 
          incisos: ["Inciso a: No portar cinturón de seguridad", "Inciso b: No presentar licencia de conducir"]
        },
        // Añadir más fracciones e incisos según sea necesario
      ],
    },
    'Art.35 EQUIPO PARA LA CIRCULACIÓN DE VEHÍCULOS': {
      fracciones: [
        { 
          nombre: "Fracción III", 
          incisos: ["Inciso a: Faros no funcionales", "Inciso b: Uso indebido de claxon"]
        },
        // ...otros ejemplos
      ],
    },
    // Asumiendo más artículos aquí...
  };

  getArticulos(): string[] {
    return Object.keys(this.articulos);
  }

  getFracciones(articulo: string): Fraccion[] {
    return this.articulos[articulo]?.fracciones || [];
  }

  getIncisos(articulo: string, fraccionNombre: string): string[] {
    const fraccion = this.articulos[articulo]?.fracciones.find(f => f.nombre === fraccionNombre);
    return fraccion ? fraccion.incisos : [];
  }
}
