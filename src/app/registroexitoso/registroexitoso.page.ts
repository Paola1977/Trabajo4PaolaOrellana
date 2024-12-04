import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registroexitoso',
  templateUrl: './registroexitoso.page.html',
  styleUrls: ['./registroexitoso.page.scss'],
})
export class RegistroexitosoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  ir_inicio() {
        this.navCtrl.navigateForward('/home');
  }
}
