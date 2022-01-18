import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, noEsStrider, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  
  constructor(private fb: FormBuilder,
              private ValidatorService: ValidatorService,
              private EmailValidatorService: EmailValidatorService) { }
  


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Xavier Mejia',
      email : 'test1@test.com',  
      username: 'xavier08',
      password: 123456,
      cPassword: 123456
    })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre    : ['', [Validators.required, Validators.pattern(this.ValidatorService.nombreApellidoPattern) ]],
    email     : ['', [Validators.required, Validators.pattern(this.ValidatorService.emailPattern) ], [this.EmailValidatorService]],
    username  : ['', [Validators.required, this.ValidatorService.noEsStrider]],
    password  : ['', [Validators.required, Validators.minLength(6)]],
    cPassword : ['', [Validators.required]],
  },{
  validators: [this.ValidatorService.campoIguales('password', 'cPassword')]
  
  })

 get emailErrorMsg(): string{
const errors = this.miFormulario.get('email')?.errors;

   if (errors?.required) {
     return 'El correo es obligatorio'
   }
   else if(errors?.pattern){
     return 'El valor no tiene formato de correo';
   }
   else if(errors?.emailTomado){
     return 'El email ya existe'
   }
   return ''
 }
  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched 
  }
  
  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required
  //   && this.miFormulario.get('email')?.touched 
  // } 
  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.pattern
  //   && this.miFormulario.get('email')?.touched 
  // }
  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.emailTomado
  //   && this.miFormulario.get('email')?.touched 
  // }
  
  submitForm(){

    console.log(this.miFormulario.value);
    
    this.miFormulario.markAllAsTouched();
  }
}
