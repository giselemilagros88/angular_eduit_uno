import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ModuloModule } from './modulo/modulo.module';
import { AtributosComponent } from './components/atributos/atributos.component';
import { BindingComponent } from './components/binding/binding.component';
import { EstructuraComponent } from './components/estructura/estructura.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AtributosComponent,
    BindingComponent,
    EstructuraComponent,
    FormulariosComponent,
    ResaltarDirective,
    NavbarComponent,
    AlumnoComponent,
    UsuariosComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ModuloModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
     //para incorporar las rutas en nuestra app
     RouterModule.forRoot(routes),
     HttpClientModule
  ],  
  bootstrap:[AppComponent]
})
export class AppModule { }
