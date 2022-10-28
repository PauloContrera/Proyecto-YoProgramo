import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { TokenService } from 'src/app/service/token.service';
import { IdiomasService } from 'src/app/service/idiomas.service';
import { Confirm, Loading, Notify } from 'notiflix';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss']
})
export class IdiomasComponent implements OnInit {

  
  idioma: Idioma[] = [];

  constructor(private idiomasS: IdiomasService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  

  cargarExperiencia(): void {
    this.idiomasS.lista().subscribe(data => { this.idioma = data; })
  }

  delete(id?: number){
    Loading.standard('Cargando...');
    
    Confirm.show(
      '¡Advertencia!',
      'Desea borrar este componente',
      'Si',
      'No',
      () => { if(id != undefined){
        this.idiomasS.borrar(id).subscribe(
          
          data => {
            this.cargarExperiencia();
            Notify.success('¡Operación exitosa!');
        Loading.remove();

          }, err => {
            Notify.failure('¡Ups! Algo salió mal');
        Loading.remove();

          }
        )
      }
      },
      () => {
        Loading.remove();
      
      },
      {
      },
      );
   
  }
}
