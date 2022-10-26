import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = environment.URL + 'ExpLab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
  }

  public individual(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL + `individual/${id}`);
  } 

  public crear(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', experiencia);
  }

  public actualizar(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
