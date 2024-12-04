import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


interface AlertData {
  usuario: string;
  password: string;
}

interface AlertUsuario {
  rut: string;
  nombres: string;
  apellidos: string;
  email: string;
  fono: string;
  password: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Aceptar',
      handler: (data: AlertData) => {
        console.log('Usuario:', data.usuario);
        console.log('Contraseña:', data.password);
        this.ir_lectura(); 
      },
    },
  ];

  alertButtonsNuevos = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Aceptar',
      handler: (usuario: AlertUsuario) => {
        console.log('Rut:', usuario.rut);
        console.log('Nombres:', usuario.nombres);
        console.log('Apellidos:', usuario.apellidos);
        console.log('Email:', usuario.email);
        console.log('Teléfono:', usuario.fono);
        console.log('Contraseña:', usuario.password);
        this.ir_registroexitoso(); 
      },
    },
  ];

  alertInputs = [
    {
      name: 'usuario',
      placeholder: 'Usuario',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Contraseña',
      min: 1,
      max: 10,
    },
  ];

  alertNuevos = [
    { name: 'rut', placeholder: 'Rut' },
    { name: 'nombre', type: 'text', placeholder: 'Nombre' },
    { name: 'apellidos', type: 'text', placeholder: 'Apellidos' },
    { name: 'email', type: 'email', placeholder: 'Correo Electrónico' },
    { name: 'fono', type: 'tel', placeholder: 'Teléfono' },
    { name: 'password', type: 'password', placeholder: 'Contraseña', min: 1, max: 10 },
    { name: 'repassword', type: 'password', placeholder: 'Reingrese Contraseña', min: 1, max: 10 },
  ];

  constructor(public navCtrl: NavController) {}

  ir_lectura() {
    this.navCtrl.navigateForward('/bibliotecausuario');
  }

  ir_registroexitoso() {
    this.navCtrl.navigateForward('/registroexitoso');
  }
}
