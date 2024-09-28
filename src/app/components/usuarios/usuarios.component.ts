import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuarios.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit, OnDestroy {

  usuarios: Usuario[] = [];
  subscripcion: Subscription = new Subscription();
  idUsuario: number = 0;

  constructor(
    private usuariosService:UsuariosService
  ){}

  ngOnInit(){
    this.obtenerUsuarios();
   
  }

   // Cuando el componente se destruye dejo de escuchar al observable
   ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }
   
  // method que obtiene los usuarios 
  // se suscribe al observable de usuarios escuchando los cambios en el objeto
  obtenerUsuarios(){
    this.subscripcion = this.usuariosService.obtener().subscribe(usuarios =>{
      if(usuarios){
        this.usuarios = usuarios;
        this.idUsuario = this.usuarios.length;
      }
     
    } 
      
    );
  }

  modificarUsuario( user: Usuario){
    // esto hay que cambiarlo por el formulario que vimos
    user.nombre = user.nombre + "modificado";
    user.programa = !user.programa;
    this.subscripcion = this.usuariosService.modificar(user).subscribe(() => {
      this.obtenerUsuarios();
    });
  }

  eliminarUsuario(id: number){
    this.subscripcion = this.usuariosService.eliminar(id).subscribe(() => {
      this.obtenerUsuarios();
    });
  }

  crearUsuario(){
    // esto hay que cambiarlo por el formulario que vimos reactivo
    const user = {
      id: this.idUsuario + 1,
      nombre: "Maria",
      apellido: "Gimenez",
      dni: "35698788",
      imagen: "https://cdn4.iconfinder.com/data/icons/creative-business-concept-illustrations/255/Business_concepts-03-14-512.png",
      programa: false
    }
    this.subscripcion = this.usuariosService.crear(user).subscribe(() => {
      this.obtenerUsuarios();
    });
  }
 

}
