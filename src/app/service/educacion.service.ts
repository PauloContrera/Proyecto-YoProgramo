import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = environment.URL + 'Educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public individual(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `individual/${id}`);
  } 

  public crear(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', educacion);
  }

  public actualizar(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, educacion);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
