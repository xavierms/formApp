import { Component } from '@angular/core';

interface MenuItem{
  texto: string;
  ruta:  string;

}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
     `
     li{
       cursor: pointer;
     }
     `
  ]
})
export class SidemenuComponent  {

 templateMenu: MenuItem[]=[
   {
     texto: 'Básicos',
     ruta:  './template/basicos'
   },
   {
    texto: 'Dinámicos',
    ruta:  './template/dinamicos'
   },
   {
     texto: 'Switch',
     ruta:  './template/switches'
   }
 ]

 reactiveMenu: MenuItem[]=[
  {
    texto: 'Básicos',
    ruta:  './reactive/basicos'
  },
  {
   texto: 'Dinámicos',
   ruta:  './reactive/dinamicos'
  },
  {
    texto: 'Switch',
    ruta:  './reactive/switches'
  }
]

}
