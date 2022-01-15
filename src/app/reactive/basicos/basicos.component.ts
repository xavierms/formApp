import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  constructor(private formBuilder:FormBuilder) { }

  // miFormulario : FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4089ti')
  // })

  miFormulario: FormGroup = this.formBuilder.group({
    nombre:[,[Validators.required,Validators.minLength(3)]],
    precio:[,[Validators.required,Validators.min(0)]],
    stock :[,[Validators.required,Validators.min(0)]]
  })
  ngOnInit(): void {
  }

validarForm(field: string){
return  this.miFormulario.controls[field].errors
                       && this.miFormulario.controls[field].touched
}
guardar(){
if (this.miFormulario.invalid  ) {
  this.miFormulario.markAllAsTouched();
  return ;
  
}
  console.log(this.miFormulario.value);
}

}
