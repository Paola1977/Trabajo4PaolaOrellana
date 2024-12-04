import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecausuarioPageRoutingModule } from './bibliotecausuario-routing.module';

import { BibliotecausuarioPage } from './bibliotecausuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecausuarioPageRoutingModule
  ],
  declarations: [BibliotecausuarioPage]
})
export class BibliotecausuarioPageModule {}
