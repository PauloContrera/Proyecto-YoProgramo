import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {Acercade} from 'src/app/database/acercademi';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {
  acercade= Acercade;

  ngOnInit(): void {
   
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }


}
