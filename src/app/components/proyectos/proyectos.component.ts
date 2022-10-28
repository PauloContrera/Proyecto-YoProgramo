import {  Component,  OnInit} from '@angular/core';
import {  Proyectos} from 'src/app/model/proyectos';
import {  TokenService} from 'src/app/service/token.service';
import {  ProyectosService} from 'src/app/service/proyectos.service';
import {  Confirm,  Loading,  Notify} from 'notiflix';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];

  constructor(private proyectosS: ProyectosService, private tokenService: TokenService) {}

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
    this.proyectosS.lista().subscribe(data => {
      this.proyectos = data;
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
          this.proyectosS.borrar(id).subscribe(

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
        console.log(this.proyectos)

      }, {},
    );

  }
}
