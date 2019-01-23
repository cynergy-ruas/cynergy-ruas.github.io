import { Component, OnInit, AfterViewInit } from '@angular/core';

// stuff for the Particle.JS
import particle_config from '../particles_config';
declare var TweenMax: any;
declare var Quart: any;
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  title = 'Cynergy';

  myParams: object = {};
  width = 100;
  height = 100;


  constructor() { }


  ngOnInit(): void {
    this.myParams = particle_config;
  }

  ngAfterViewInit() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
      $('#preloader').fadeOut('slow');
        // preloader.parentElement.removeChild(preloader);
    }, 2000);
  }

}
