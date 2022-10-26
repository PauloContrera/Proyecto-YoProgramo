import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.scss']
})
export class NuevaEducacionComponent implements OnInit {

  nombre: string = '';
  lugar: string = '';
  desde: string = ''; 
  hasta: string = '';
  texto: string = ''; 
  img: string = ''; 

  constructor(private experiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    Loading.standard('Cargando...');
    
    const expe = new Experiencia(
                                  this.nombre,
                                  this.lugar,
                                  this.desde,
                                  this.hasta,
                                  this.texto,
                                  this.img,
                                  );
    this.experiencia.crear(expe).subscribe(
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
