import { Component } from '@angular/core';
import { AtributosComponent } from '../atributos/atributos.component';
import { CommonModule } from '@angular/common';
//reactive
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
//template driven
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formularios',
 /* standalone: true,
  imports: [
    AtributosComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,// principal para poder usar FormGroup
  ],*/
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {
  /* //atributos template driven
  formulario = {
    nombre : '',
    apellido : '',
    email: '',
    password: ''
  }

  //constructor

  //methods template driven
 
  enviar(loginForm : NgForm){
    console.log("Formulario enviar");
    console.log(loginForm);
    //console.log(formulario.value);
    let datosFormulario ={...this.formulario} ;
    // llamada a un endpoint a un servicio y le paso el objeto datosFormulario 
    loginForm.form.reset();
    console.log(datosFormulario);
    

  }*/

    //atributos formulario reactivo
    formulario: FormGroup;
   

    constructor(private formBuilder: FormBuilder){
      this.formulario = this.formBuilder.group({
        nombre: ['',
          Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])
        ],
        apellido: ['',Validators.required],
        email: ['',Validators.required],
        password: ['',Validators.required]
        
     });
    } 
    enviarReactivo(formu : FormGroup){
      console.log(formu);
      let formularioCopia = {...this.formulario};
      formu.reset();
      console.log(formularioCopia);
      
    }
}
