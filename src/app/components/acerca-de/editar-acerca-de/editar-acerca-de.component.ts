import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Loading, Notify } from 'notiflix';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.scss']
})
export class EditarAcercaDeComponent implements OnInit {
  personaEditar!: persona;

  constructor(public personaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    Loading.standard('Cargando...');

    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(
      data =>{
        this.personaEditar = data;
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
    
    const id =1;
    console.log(this.personaEditar)
    this.personaService.actualizar(this.personaEditar).subscribe(
      data => {
        this.router.navigate(['']);
        Loading.remove();
        Notify.success('¡Operación exitosa!');

      }, err =>{
        Notify.failure('¡Ups! Algo salió mal');
         this.router.navigate(['']);
        Loading.remove();

      }
    )
  }
}
