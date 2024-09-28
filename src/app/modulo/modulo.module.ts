import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  // componentes
  declarations: [
    PanelComponent,
    ContenidoComponent
  ],
  // modules
  imports: [
    CommonModule
  ],
  // services
  providers: [],
  exports: [PanelComponent],
  
})
export class ModuloModule { }
