import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = environment.URL + 'Acerca/';


  constructor(private http: HttpClient) { }
  public getPersonas(): Observable<persona> {
    return this.http.get<persona>(this.URL+'lista');
  }
  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL+'individual/1');
  }
  public actualizar(persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `actualizar/1`, persona);
  }

}
