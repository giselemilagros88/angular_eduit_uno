import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url:string = 'http://localhost:8080/usuarios/';
  private urlHosting: string = 'https://66f7af4bb5d85f31a3434c3e.mockapi.io/usuarios/usuarios/';
  constructor(
    private httpClient: HttpClient
  ) { }

  obtener(): Observable<Usuario[]>{
    // esto retorna un observable gracias a httpClient,
    // por lo que el componente que llame a este servicio
    // deberá subscribirse a este observable para obtener
    // la respuesta del servidor
   // return this.httpClient.get<Usuario[]>(this.url);
   return this.httpClient.get<Usuario[]>(this.urlHosting);
  }
  modificar(user: Usuario): Observable<Usuario>{
   // return this.httpClient.put<Usuario>(this.url+user.id, user);
   return this.httpClient.put<Usuario>(this.urlHosting+user.id, user);
  }
  eliminar(id: number): Observable<Usuario>{
    //return this.httpClient.delete<Usuario>(this.url + id);
    return this.httpClient.delete<Usuario>(this.urlHosting + id);
  }
  crear(user: Usuario): Observable<Usuario>{
   // return this.httpClient.post<Usuario>(this.url, user);
   return this.httpClient.post<Usuario>(this.urlHosting, user);
  }
}
