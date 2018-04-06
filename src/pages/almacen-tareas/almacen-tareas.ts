import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioTareasProvider } from '../../providers/servicio-tareas/servicio-tareas';

/**
 * Generated class for the AlmacenTareasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-almacen-tareas',
  templateUrl: 'almacen-tareas.html',
})
export class AlmacenTareasPage {
  public tareasAlmacenadas=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private servicioTareas: ServicioTareasProvider) {
  }

  ionViewDidLoad() {
    this.tareasAlmacenadas = this.servicioTareas.getAlmacen();
  }

}
