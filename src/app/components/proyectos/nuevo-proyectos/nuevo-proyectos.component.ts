import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevo-proyectos',
  templateUrl: './nuevo-proyectos.component.html',
  styleUrls: ['./nuevo-proyectos.component.scss']
})
export class NuevoProyectosComponent implements OnInit {

  
  nombre: string = '';
  texto: string = '';
  img: string = '';
  lenguajes: string = '';
  url: string = '';
  github: string = '';
  video: string = ''; 

  constructor(private proyectosS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    Loading.standard('Cargando...');
    
    const proyectos = new Proyectos(
                                  this.nombre,
                                  this.texto,
                                  this.img,
                                  this.lenguajes,
                                  this.url,
                                  this.github,
                                  this.video
                                  );
    this.proyectosS.crear(proyectos).subscribe(
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
