import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    
  }

 

}
