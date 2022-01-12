import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'template',
    loadChildren: ()=> import('./template/template.module').then( x => x.TemplateModule )
  },
  {
    path:'reactive',
    loadChildren: ()=> import('./reactive/reactive.module').then( x => x.ReactiveModule )
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
