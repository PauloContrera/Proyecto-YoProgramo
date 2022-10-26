import {
  Component,
  OnInit
} from '@angular/core';
import {
  Experiencia
} from 'src/app/model/experiencia';
import {
  TokenService
} from 'src/app/service/token.service';
import {
  ExperienciaService
} from 'src/app/service/experiencia.service';
import {
  Confirm,
  Loading,
  Notify
} from 'notiflix';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  expe: Experiencia[] = [];

  constructor(private experienciaS: ExperienciaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    console.log(this.expe);
  }


  cargarExperiencia(): void {
    this.experienciaS.lista().subscribe(data => {
      this.expe = data;
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
          this.experienciaS.borrar(id).subscribe(

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

      }, {},
    );

  }
}
