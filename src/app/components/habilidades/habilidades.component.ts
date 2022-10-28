import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { TokenService } from 'src/app/service/token.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { Confirm, Loading, Notify } from 'notiflix';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation  } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination,Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidades[] = [];

  constructor(private habilidadesS: HabilidadesService, private tokenService: TokenService) { }

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
    this.habilidadesS.lista().subscribe(data => { this.habilidades = data; })
  }

  delete(id?: number){
    Loading.standard('Cargando...');
    
    Confirm.show(
      '¡Advertencia!',
      'Desea borrar este componente',
      'Si',
      'No',
      () => { if(id != undefined){
        this.habilidadesS.borrar(id).subscribe(
          
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
