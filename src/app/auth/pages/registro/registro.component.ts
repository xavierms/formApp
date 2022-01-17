import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {}

  nombreApellidoPattern: string = '([a-zA-ZÀ-ÿ]+) ([a-zA-ZÀ-ÿ]+)';
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern) ]]
  })

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched
     
  }
}
