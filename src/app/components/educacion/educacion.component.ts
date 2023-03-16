import {  Component,  OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {


  ngOnInit(): void {
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }


}
