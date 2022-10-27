import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL = environment.URL + 'Habilidades/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.URL + 'lista');
  }

  public individual(id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.URL + `individual/${id}`);
  } 

  public crear(experiencia: Habilidades): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', experiencia);
  }

  public actualizar(id: number, experiencia: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
