import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
   // atributo
  private alumnos: Alumno[] = [];

  constructor() { 
    this.alumnos = [
      { nroLegajo: 1 , nombre: 'Veronica', apellido: 'Lopez', dni: '35698745', imagen: "https://cdn4.iconfinder.com/data/icons/creative-business-concept-illustrations/255/Business_concepts-03-14-512.png", programa: true},
      { nroLegajo: 2 , nombre: 'Mauro', apellido: 'Gonzalez', dni: '34888555', imagen: "https://cdn3.iconfinder.com/data/icons/business-1609/302/Design_set-02-34-512.png", programa: true},
      { nroLegajo: 3 , nombre: 'Michael', apellido: 'Pinilla', dni: '18569874', imagen: "https://cdn1.iconfinder.com/data/icons/social-media-influencer-1/272/Business_Concept_II-01-02-512.png", programa: true},
      { nroLegajo: 4 , nombre: 'Gisele', apellido: 'Banegas', dni: '3245878', imagen: "https://cdn4.iconfinder.com/data/icons/creative-business-concept-illustrations/255/Business_concepts-03-14-512.png", programa: false}
    ];
  }
  //methods 

    getAlumnos(): Alumno[] {
      return this.alumnos;
    }

    addAlumno(alumno: Alumno): void {
      this.alumnos.push(alumno);
    }
    
    deleteAlumno(posicion: number): void {
      // desde la posicion un elemento
      this.alumnos.splice(posicion, 1);
    }
}
