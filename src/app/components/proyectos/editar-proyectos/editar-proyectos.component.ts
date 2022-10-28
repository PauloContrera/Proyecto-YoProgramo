import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.scss']
})
export class EditarProyectosComponent implements OnInit {
  proyectos!: Proyectos;

  constructor(private proyectosS: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    Loading.standard('Cargando...');
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.individual(id).subscribe(
      data =>{
        this.proyectos = data;
        Loading.remove();

      }, err =>{
        Notify.failure('¡Ups! Algo salió mal');
        this.router.navigate(['']);
        Loading.remove();

      }
    )
  }

  onUpdate(): void{
    Loading.standard('Cargando...');
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.actualizar(id, this.proyectos).subscribe(
      data => {
        Notify.success('¡Operación exitosa!');
        this.router.navigate(['']);
        Loading.remove();
      }, err =>{
        Notify.failure('¡Ups! Algo salió mal');

         this.router.navigate(['']);
         Loading.remove();
      }
    )
  }

}
