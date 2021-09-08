import { Component } from '@angular/core';
import { Opmenu } from './interfaces/opmenu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones:Opmenu[]=[
    {
      link:"home",
      texto:"home",
      icono:"home"
    },
    {
      link:"pag2",
      texto:"Listas",
      icono:"list"
    },
    {
      link:"pag3",
      texto:"Personal",
      icono:"person"
    },
    {
      link:"pag4",
      texto:"Alertas",
      icono:"warning"
    },
    {
      link:"pag4",
      texto:"otra página",
      icono:"flash"
    }
  ]
  constructor() {}
}
