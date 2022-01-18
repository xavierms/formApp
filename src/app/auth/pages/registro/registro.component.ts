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
      email : 'xms@mail.com',  
      username: 'xavier08'
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

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched 
  }
  submitForm(){
    this.miFormulario.markAllAsTouched();
  }
}
