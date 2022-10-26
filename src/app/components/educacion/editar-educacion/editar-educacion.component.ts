import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.scss']
})
export class EditarEducacionComponent implements OnInit {
  expLab!: Experiencia;

  constructor(private experiencia: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    Loading.standard('Cargando...');
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencia.individual(id).subscribe(
      data =>{
        this.expLab = data;
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
    this.experiencia.actualizar(id, this.expLab).subscribe(
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
