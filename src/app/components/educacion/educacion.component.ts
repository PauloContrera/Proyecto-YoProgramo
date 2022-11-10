import {  Component,  OnInit} from '@angular/core';
import * as AOS from 'aos';
import {Educacion} from 'src/app/database/Educacion'

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  educacion= Educacion;

  ngOnInit(): void {
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }


}
