import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

 
  URL = environment.URL + 'Idiomas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.URL + 'lista');
  }

  public individual(id: number): Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.URL + `individual/${id}`);
  } 

  public crear(cursos: Idioma): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', cursos);
  }

  public actualizar(id: number, cursos: Idioma): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, cursos);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
