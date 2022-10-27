import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.scss']
})
export class NuevaHabilidadComponent implements OnInit {

  nombre: string = '';
  img: string = ''; 

  constructor(private habilidadesS: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    Loading.standard('Cargando...');
    
    const habilidades = new Habilidades(
                                  this.nombre,
                                  this.img,
                                  );
    this.habilidadesS.crear(habilidades).subscribe(
      data => {
        Notify.success('¡Operación exitosa!');

        this.router.navigate(['']);
        Loading.remove();

      }, err => {
        Notify.failure('¡Ups! Algo salió mal');
        this.router.navigate(['']);
        Loading.remove();

      }
    )
  }


}
