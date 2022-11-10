import {  Component,  OnInit} from '@angular/core';
import * as AOS from 'aos';
import {Cursos} from 'src/app/database/Cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos=Cursos;

  isLogged = false;

  ngOnInit(): void {
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}
