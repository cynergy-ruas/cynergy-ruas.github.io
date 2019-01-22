import { Component, OnInit } from '@angular/core';
import particle_config from '../particles_config';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myParams: object = {};
  width = 100;
  height = 100;

  constructor() { }

  ngOnInit() {
    this.myParams = particle_config;
  }

}
