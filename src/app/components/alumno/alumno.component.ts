import { Component } from '@angular/core';
import { Alumno } from '../../models/alumno.interface';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  alumnos:Alumno[] = [];

  constructor(
    private _alumnosService:AlumnosService
  )
  {
    this.alumnos = this._alumnosService.getAlumnos();
  }
}
