import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = environment.URL + 'Proyectos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }

  public individual(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `individual/${id}`);
  } 

  public crear(rroyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', rroyectos);
  }

  public actualizar(id: number, rroyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, rroyectos);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
