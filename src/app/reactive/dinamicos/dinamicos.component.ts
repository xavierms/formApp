import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  Validator,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array(
      [
        ['meta', Validators.required],
        ['death', Validators.required],
      ],
      Validators.required)
  });

  nuevoFavorito: FormControl = this.formBuilder.control(
    '',
    Validators.required
  );
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  ngOnInit(): void {}

  validarForm(field: string) {
    return (
      this.miFormulario.controls[field].errors &&
      this.miFormulario.controls[field].touched
    );
  }
  
 addFavorito(){
   if (this.nuevoFavorito.invalid) { return; }

  //  this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required) );
   this.favoritosArr.push(this.formBuilder.control( this.nuevoFavorito.value, Validators.required));

   this.nuevoFavorito.reset();
 }
 borrar(index: number){
this.favoritosArr.removeAt(index)
 }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log('save');
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
