import { Component } from '@angular/core';
import { Alumno } from '../../models/alumno.interface';
import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrl: './estructura.component.css'
})
export class EstructuraComponent {
  // atributo
  alumnos: Alumno[] = [];
  alumnoForm: Alumno ={
    nroLegajo: 0,
    nombre: '',
    apellido: '',
    dni: '',
    imagen: '',
    programa: false
  }; // inicializo el objeto vacio
  mostrar: boolean = true;
  mostrarLegajo: boolean = false;
  colorResaltar: string = "violet";

  // constructor 
  constructor (
    //inyecccion de dependencias
    private alumnosService: AlumnosService,
  ){

  }
  
  // methods
  ngOnInit(){
    // obtengo los alumnos del servicio y los asigno al atributo alumnos
    this.alumnos = this.alumnosService.getAlumnos();
    console.log("Alumnos en el ngOnInit");
    console.log(this.alumnos);

  }

  // metodo para eliminar un alumno
  eliminarAlumno(posicion: number){
    // desde la posicion un elemento
    this.alumnosService.deleteAlumno(posicion);

  }

  //metodo para agregar un alumno
  agregarAlumno(){
    const alumnoNuevo : Alumno = {
      nroLegajo: 5,
      nombre: 'Juan',
      apellido: 'Perez',
      dni: '12345678',
      imagen: "https://cdn3.iconfinder.com/data/icons/business-1609/302/Design_set-02-34-512.png",
      programa : false
    }
    // traer el alumno del formulario que debemos agregar
    this.alumnosService.addAlumno(alumnoNuevo);

  
  }

}
