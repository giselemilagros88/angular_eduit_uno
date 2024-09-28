import { Component } from '@angular/core';
import { AtributosComponent } from '../atributos/atributos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
/*  standalone: true,
  imports: [
    AtributosComponent,
    FormsModule
  ],*/
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  //atributos public quiere decir que puedo acceder por fuera de la clase 
   title:string = "Este es el Componente Binding"
   mensaje:string = "Este es un mensaje";
   isButtonDisabled:boolean = false; //boton deshabilitado
   linkUrl:string = "https://www.google.com";
   aperturaLink:string = "_blank";
   urlImagen:string = "https://cdn.pixabay.com/photo/2022/10/11/12/38/dog-7514202_1280.jpg";
   widthImagen:string = "600";
   name:string ="Vero";

   // constructores


   // methods es public por defecto
   mostrar(){
    alert("Me encanta Angular");
   }

}
