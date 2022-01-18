import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
  

  noEsStrider(control: FormControl){
     const valor = control.value?.trim().toLowerCase();
     if (valor === 'strider') {
       return {
         noStrider: true
       }
     }
     return null;
     
     
  }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Xavier Mejia',
      email: 'xms@mail.com',
      
    })
  }

  nombreApellidoPattern: string = '([a-zA-ZÀ-ÿ]+) ([a-zA-ZÀ-ÿ]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern) ]],
    email : ['', [Validators.required, Validators.pattern(this.emailPattern) ]],
    username : ['', [Validators.required, this.noEsStrider ]]
  })

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched 
  }
  submitForm(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }
}
