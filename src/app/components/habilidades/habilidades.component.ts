import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface Logo {
  src: string;
  name: string;
}
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],

})
export class HabilidadesComponent implements OnInit {

 


  logos: Logo[] = [
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    { src: 'assets/skills2/angular.png', name: 'HTML' },
    { src: '../../../assets/skills2/arduino.png', name: 'CSS' },
    // Añade más logos aquí
  ];

  translateX = 0;
  showTooltipIndex = -1;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onMouseMove(event: MouseEvent) {
    const element = event.target as HTMLElement;
    const boundingRect = element.getBoundingClientRect();
    const mousePosition = event.clientX - boundingRect.left;
    const elementWidth = boundingRect.width;

    const delta = elementWidth / 2 - mousePosition;
    this.translateX = delta / 10;
  }

  onMouseLeave() {
    this.translateX = 0;
  }


}
