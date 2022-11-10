import {  Component,  OnInit} from '@angular/core';
import {  Proyectos} from 'src/app/database/Proyectos';
import * as AOS from 'aos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectos=Proyectos;


  ngOnInit(): void {
   
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}
