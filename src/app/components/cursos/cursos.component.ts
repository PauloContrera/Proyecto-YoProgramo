import {  Component,  OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  
  ngOnInit(): void {
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}
