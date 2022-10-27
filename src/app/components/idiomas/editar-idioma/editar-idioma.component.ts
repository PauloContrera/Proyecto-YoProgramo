import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { Idioma} from 'src/app/model/idioma';
import { IdiomasService } from 'src/app/service/idiomas.service';

@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html',
  styleUrls: ['./editar-idioma.component.scss']
})
export class EditarIdiomaComponent implements OnInit {

  idioma!: Idioma;

  constructor(private idiomasS: IdiomasService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    Loading.standard('Cargando...');
    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomasS.individual(id).subscribe(
      data =>{
        this.idioma = data;
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
    this.idiomasS.actualizar(id, this.idioma).subscribe(
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
