import { Component } from '@angular/core';


// decorador de typescript
// directiva de componente
// transforma esta clase AppComponent en un componente
// le añade logica, le cambio el comportamiento, y agrego metadatos
// el selector es como vamos a nuestro componente dentro de otro componente, o como lo vamos a seleccionar
@Component({
  selector: 'app-root',
 /*  standalone: true,
  imports: [
    RouterOutlet, 
    AtributosComponent,
    BindingComponent,
    EstructuraComponent,
    FormulariosComponent
  ],*/
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeros_pasos';
}
