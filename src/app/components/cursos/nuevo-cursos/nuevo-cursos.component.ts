import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import {  Cursos} from 'src/app/model/cursos';
import {  CursosService} from 'src/app/service/cursos.service';

@Component({
  selector: 'app-nuevo-cursos',
  templateUrl: './nuevo-cursos.component.html',
  styleUrls: ['./nuevo-cursos.component.scss']
})
export class NuevoCursosComponent implements OnInit {
 
  nombre: string = '';
  lugar: string = '';
  desde: string = ''; 
  hasta: string = '';
  texto: string = ''; 
  img: string = ''; 

  constructor(private educacionS: CursosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    Loading.standard('Cargando...');
    
    const cursos = new Cursos(
                                  this.nombre,
                                  this.lugar,
                                  this.desde,
                                  this.hasta,
                                  this.texto,
                                  this.img,
                                  );
    this.educacionS.crear(cursos).subscribe(
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
