import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Idiomas } from 'src/app/database/Idiomas';
import * as AOS from 'aos';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss']
})
export class IdiomasComponent implements OnInit {

  
  idioma=Idiomas;


  ngOnInit(): void {
    
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
  

}
