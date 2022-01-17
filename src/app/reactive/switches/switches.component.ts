import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Persona{
  genero: string;
  notificaciones: boolean;
}
@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });

    // this.miFormulario.valueChanges.subscribe( form =>{
    //   // delete form.condiciones;
    //   var {condiciones, genero}= form
    //   this.persona = form
    //   console.log(form);
      
    // })
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest}) =>{
      this.persona = rest;
    })
  }


  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  })
  persona: Persona[] = []

  // persona = {
  //   genero: 'F',
  //   notificaciones: true
  // }
  guardar(){
    const formValue ={...this.miFormulario.value}
    console.log(formValue);
    

    this.persona = formValue;
  }
}
