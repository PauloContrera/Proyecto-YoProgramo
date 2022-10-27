import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import {  Cursos} from 'src/app/model/cursos';
import {  CursosService} from 'src/app/service/cursos.service';


@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.scss']
})
export class EditarCursosComponent implements OnInit {

  cursos!: Cursos;

  constructor(private cursosS: CursosService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    Loading.standard('Cargando...');
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursosS.individual(id).subscribe(
      data =>{
        this.cursos = data;
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
    this.cursosS.actualizar(id, this.cursos).subscribe(
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
