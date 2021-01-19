import { Component, OnInit } from '@angular/core';
import { PELICULAS } from '../hero.data';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  peliculas = PELICULAS;

  constructor() { }

  ngOnInit(): void {
  }

}
