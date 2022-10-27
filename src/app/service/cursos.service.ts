import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../model/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  URL = environment.URL + 'Cursos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cursos[]>{
    return this.httpClient.get<Cursos[]>(this.URL + 'lista');
  }

  public individual(id: number): Observable<Cursos>{
    return this.httpClient.get<Cursos>(this.URL + `individual/${id}`);
  } 

  public crear(cursos: Cursos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', cursos);
  }

  public actualizar(id: number, cursos: Cursos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, cursos);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
