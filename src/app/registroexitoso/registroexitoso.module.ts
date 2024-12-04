import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroexitosoPageRoutingModule } from './registroexitoso-routing.module';

import { RegistroexitosoPage } from './registroexitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroexitosoPageRoutingModule
  ],
  declarations: [RegistroexitosoPage]
})
export class RegistroexitosoPageModule {}
