import {  Component,  OnInit} from '@angular/core';
import {  Cursos} from 'src/app/model/cursos';
import {  TokenService} from 'src/app/service/token.service';
import {  CursosService} from 'src/app/service/cursos.service';
import {  Confirm,  Loading,  Notify} from 'notiflix';
import * as AOS from 'aos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] = [];

  constructor(private cursosS: CursosService, private tokenService: TokenService) {}

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
    this.cursosS.lista().subscribe(data => {
      this.cursos = data;
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
          this.cursosS.borrar(id).subscribe(

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
