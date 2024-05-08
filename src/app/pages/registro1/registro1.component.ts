import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfractorService } from '../../services/infractor.service';
import { CocheService } from '../../services/coche.service';

@Component({
  selector: 'app-registro1',
  templateUrl: './registro1.component.html',
  styleUrls: ['./registro1.component.scss']
})
export class Registro1Component implements OnInit {
  mexicanStates: string[] = [
    'Seleccionar--',
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila',
    'Colima',
    'Durango',
    'Estado de México',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Ciudad de México',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ];
  selectedColor: string = '';
  selectedMarca: string = '';
  selectedLinea: string = '';
  selectedModelo: string = '';
  selectedTipo: string = '';
  selectedCar: any = null;
  selectedCarId: string | null = null;
  selectedCarData: any = null;

    
  isModalOpen: boolean = false;
  infractorData = {
    placas: '',
    telefono: '',
    marca: '',
    linea: '',
    ano: '',
    color_coche: ''
  };
  coches: any[] = [];

  constructor(
    private route: Router,
    private infractorService: InfractorService,
    private cocheService: CocheService
  ) {}

  direccionData = {
    estado: ''
  };

  marcas: string[] = [];
  lineas: string[] = [];
  modelos: string[] = [];
  tipos: string[] = [];


  ngOnInit() {
    this.fetchCoches();
  }

  fetchCoches() {
    this.cocheService.listarCoches({}).subscribe({ // Pass an empty object as an argument
      next: (coches: { marca: string, linea: string, modelo: string, tipo: string }[]) => { // Explicitly type coches as an array of objects with marca, linea, and modelo properties
        this.coches = coches;

        this.marcas = [...new Set(coches.map(coche => coche.marca))] as string[]; // Use the as keyword to cast the result to a string[] array
        this.lineas = [...new Set(coches.map(coche => coche.linea))];
        this.modelos = [...new Set(coches.map(coche => coche.modelo))];
        this.tipos = [...new Set(coches.map(coche => coche.tipo))];
        
        this.marcas.sort();

      },
      error: (err) => {
        console.error('Error fetching coches', err);
      }
    });
  }

  updateLineas() {
    // Find the selected brand
    const selectedBrand = this.coches.find(coche => coche.marca === this.selectedMarca);
      
    // Filter the 'lineas' array based on the selected brand
    this.lineas = [...new Set(this.coches
      .filter(coche => coche.marca === selectedBrand.marca)
      .map(coche => coche.linea))];
    this.lineas.sort();
  
  }

  updateModelos() {
    // Filter the 'lineas' array based on the selected brand and model
    this.modelos = this.coches
      .filter(coche => coche.marca === this.selectedMarca && coche.linea === this.selectedLinea)
      .map(coche => coche.modelo);
      this.modelos.sort();

  }
  updateTipos() {
    console.log('Selected marca:', this.selectedMarca);
    console.log('Selected linea:', this.selectedLinea);
    console.log('Selected modelo:', this.selectedModelo);
  
    const cochesFiltrados = this.coches.filter(coche =>
      coche.marca === this.selectedMarca && coche.linea === this.selectedLinea && Number(coche.modelo) === Number(this.selectedModelo));
  
    console.log('Filtered coches:', cochesFiltrados);
  
    this.tipos = cochesFiltrados.flatMap(coche => coche.tipo.split(',').map((tipo: string) => tipo.trim()));
    this.tipos.sort();
  
    console.log('Updated tipos:', this.tipos);
  }
  
  
  obtenerIdDelCoche() {
    this.cocheService.obtenerIdCoche(this.selectedCarData).subscribe({
      next: (response) => {
        this.selectedCarId = response.coche_id; // Asume que el backend envía el ID como 'coche_id'
        console.log('Coche ID obtenido:', this.selectedCarId);
        console.log('Tipo enviado:', this.selectedTipo); // Imprime el tipo enviado
      },
      error: (error) => {
        console.error('Error al obtener el ID del coche:', error);
      }
    });
  }

  updateSelectedCar() {
    console.log('Selected marca:', this.selectedMarca);
    console.log('Selected modelo:', this.selectedModelo);
    console.log('Selected linea:', this.selectedLinea);
    console.log('Selected tipo:', this.selectedTipo);
  
    this.selectedCarData = {
      marca: this.selectedMarca,
      modelo: this.selectedModelo,
      linea: this.selectedLinea,
      tipo: this.selectedTipo
    };
  
    console.log('Selected Car Data:', this.selectedCarData);
    this.obtenerIdDelCoche(); // Llama al método para obtener el ID

  }

  openModal() {
    this.isModalOpen = true;
  }

  setColor(color: string) {
    this.infractorData.color_coche = color;
    this.isModalOpen = false;
  }

  registrarInfractor() {
    this.infractorService.registrarInfractor(this.infractorData).subscribe({
      next: (res) => {
        console.log('Registro exitoso', res);
        this.goToNextPage();
      },
      error: (err) => {
        console.error('Error al registrar el infractor', err);
      }
    });
  }

  goToNextPage() {
    this.route.navigate(['/next-page']);
  }

  irAPagina(titulo: string): void {
    this.route.navigate([titulo]);
  }
}