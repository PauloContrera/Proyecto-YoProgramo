import {  Component,  OnInit} from '@angular/core';
import {  Educacion} from 'src/app/model/educacion';
import {  TokenService} from 'src/app/service/token.service';
import {  EducacionService} from 'src/app/service/educacion.service';
import {  Confirm,  Loading,  Notify} from 'notiflix';
import * as AOS from 'aos';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }


  cargarExperiencia(): void {
    this.educacionS.lista().subscribe(data => {
      this.educacion = data;
    })
  }

  delete(id ? : number) {
    Loading.standard('Cargando...');

    Confirm.show(
      '¡Advertencia!',
      'Desea borrar este componente',
      'Si',
      'No',
      () => {
        if (id != undefined) {
          this.educacionS.borrar(id).subscribe(

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

      }, {},
    );

  }
}
