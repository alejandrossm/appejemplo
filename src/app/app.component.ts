import { Component } from '@angular/core';
import { Menuitem } from './interfaces/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  menuitems:Menuitem[]=[
    {
      icono:"home",
      destino:"home",
      texto:"home"
    },
    {
      icono:"list",
      destino:"pag2",
      texto:"Item List"
    },
    {
      icono:"person",
      destino:"pag3",
      texto:"Personal"
    },
    {
      icono:"alert-circle",
      destino:"pag4",
      texto:"Alertas"
    }
  ];
  
  constructor() {}
}
