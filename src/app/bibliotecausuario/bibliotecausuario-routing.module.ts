import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecausuarioPage } from './bibliotecausuario.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecausuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecausuarioPageRoutingModule {}
