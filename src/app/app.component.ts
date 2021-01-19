import { Component } from '@angular/core';
import { PELICULAS } from './hero.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ch03-componentes';

  peliculas = PELICULAS;
}
