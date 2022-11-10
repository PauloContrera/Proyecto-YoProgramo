import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Habilidades } from 'src/app/database/Habilidades';
import * as AOS from 'aos';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation  } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination,Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HabilidadesComponent implements OnInit {

  habilidades=Habilidades;

  
  ngOnInit(): void {
    
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
  


}
