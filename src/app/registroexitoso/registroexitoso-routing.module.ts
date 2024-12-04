import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroexitosoPage } from './registroexitoso.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroexitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroexitosoPageRoutingModule {}
