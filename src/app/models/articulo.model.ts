// src/app/models/fraccion.model.ts
export interface Fraccion {
    nombre: string;
    incisos: string[];  // Asegúrate de que esta propiedad refleja correctamente lo que necesitas
  }
  
  
  export interface Articulo {
    [key: string]: {
      fracciones: Fraccion[];
    };
  }
  