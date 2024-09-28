import { Routes } from '@angular/router';
import { EstructuraComponent } from './components/estructura/estructura.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { PanelComponent } from './modulo/components/panel/panel.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

export const routes: Routes = [
    {path: 'estructura', component:EstructuraComponent}, //  '/estructura/
    {path: 'binding', component:BindingComponent}, //  '/binding/
    {path: 'formularios', component:FormulariosComponent}, //  '/formularios/
    {path: 'panel', component:PanelComponent}, //  '/panel/
    {path: 'alumno', component:AlumnoComponent},
    {path: 'usuarios', component:UsuariosComponent},
    {path: '', redirectTo: 'estructura', pathMatch: 'full'},
    // cuando ponen algo que no esta definido que lo redireccione a estructura
    {path: '**', redirectTo:'estructura'}, // "/
]; 
