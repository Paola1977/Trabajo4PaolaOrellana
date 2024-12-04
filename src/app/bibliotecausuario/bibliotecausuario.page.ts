import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import ePub from 'epubjs';

@Component({
  selector: 'app-bibliotecausuario',
  templateUrl: './bibliotecausuario.page.html',
  styleUrls: ['./bibliotecausuario.page.scss'],
})
export class BibliotecausuarioPage {
  libroSeleccionado: string = ''; 
  mostrarVisor: boolean = false; 
  private rendition: any; 

  constructor(
    private alertController: AlertController,
    public navCtrl: NavController
  ) {}

  ir_inicio() {
    this.navCtrl.navigateForward('/home'); 
  }

  async visualizarLibro() {
    if (!this.libroSeleccionado) {
      const alert = await this.alertController.create({
        header: 'Librería Digital',
        message: 'Por favor, seleccione un libro antes de continuar.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.mostrarVisor = true;

    setTimeout(() => {
      this.cargarLibro(this.libroSeleccionado);
    }, 100); 
  }

  cargarLibro(libro: string) {
    const rutaLibro = `assets/epubs/${libro}.epub`; 

    const container = document.getElementById('epub-viewer');
    if (container) {
      container.innerHTML = ''; 
      const book = ePub(rutaLibro);
      this.rendition = book.renderTo(container, {
        width: '100%',
        height: '100%',
      });
      this.rendition.display();
    } else {
      console.error('El contenedor para el visor EPUB no existe.');
    }
  }

  avanzarPagina() {
    if (this.rendition) {
      this.rendition.next(); 
    }
  }

  retrocederPagina() {
    if (this.rendition) {
      this.rendition.prev(); 
    }
  }

  cerrarVisor() {
    this.mostrarVisor = false; 
    this.rendition = null; 
  }
}
