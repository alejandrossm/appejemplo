import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {


  personas=[{
    nombre:"Wacoldo",
    apellido:"Soto",
    srcimagen: "../assets/images/personita.jpg"
  },
  {
  nombre:"Diogenes",
  apellido:"Carrasco",
  srcimagen: "../assets/images/personita.jpg"
  },
  {
    nombre:"Wenceslao",
    apellido:"Vargas",
    srcimagen: "../assets/images/personita.jpg"
  },
]

  constructor() { }

  ngOnInit() {
  }


}
