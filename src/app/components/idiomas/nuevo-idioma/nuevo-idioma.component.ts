import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { Idioma} from 'src/app/model/idioma';
import { IdiomasService } from 'src/app/service/idiomas.service';
@Component({
  selector: 'app-nuevo-idioma',
  templateUrl: './nuevo-idioma.component.html',
  styleUrls: ['./nuevo-idioma.component.scss']
})
export class NuevoIdiomaComponent implements OnInit {

  nombre: string = '';
  valor: number = 0;

  constructor(private idiomasS: IdiomasService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    Loading.standard('Cargando...');
    
    const idioma = new Idioma(
                                  this.nombre,
                                  this.valor,
                                  );
    this.idiomasS.crear(idioma).subscribe(
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
