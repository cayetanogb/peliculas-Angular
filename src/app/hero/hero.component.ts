import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() name: string;
  @Input() duracion: number;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
