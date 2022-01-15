import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm; 

  nuevoJuego: string ='';
 persona: Persona ={
   nombre: 'Xavier',
   favoritos:[
     {id:1,nombre:'Metal Gear'},
     {id:2,nombre:'Death Stranding'}
   ]
 }

  ngOnInit(): void {
  }
  nombreValido(): boolean{
    return this.miFormulario?.controls.nombre?.invalid 
     && this.miFormulario?.controls.nombre?.touched
  }
  guardar(){
    console.log('form');
    console.log(this.miFormulario);
    this.miFormulario.resetForm({
      nombre: ''
    });
  }
  eliminar(index: any){
this.persona.favoritos.splice(index, 1)
  }
  agregarJuego(){
    const nuevoJuegoFav: Favorito ={
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    
    if (this.nuevoJuego !== '') {
      console.log('agrego');
      this.persona.favoritos.push(nuevoJuegoFav)
      this.nuevoJuego='';
    }
    
    
  }
}
