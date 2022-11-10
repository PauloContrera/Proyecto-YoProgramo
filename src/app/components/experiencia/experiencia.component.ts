import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {Experiencia} from 'src/app/database/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  exper=Experiencia;

  ngOnInit(): void {

    
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }


}
