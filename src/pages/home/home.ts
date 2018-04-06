import { Component } from '@angular/core';
import { NavController,AlertController,reorderArray } from 'ionic-angular';
import { AlmacenTareasPage } from '../almacen-tareas/almacen-tareas';
import { ServicioTareasProvider } from '../../providers/servicio-tareas/servicio-tareas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tareas = [];
  public activado = false;
  public goAlmacen = AlmacenTareasPage;

  constructor(public navCtrl: NavController, private alertController: AlertController,
     private servicioTareas: ServicioTareasProvider ) {
       this.tareas = this.servicioTareas.getTarea();

  }

  abrirAlerta(){
    let agregarAlerta = this.alertController.create({
        title:"Tarea",
        message:"Agrega la tarea",
        inputs:[{
          type:"text",name:"agregarTarea"
        }],
        buttons:[{
          text:"cancelar"},
          {
            text:"Agregar", 
            handler:(inputData) =>{
              let tareaTxt;
              tareaTxt = inputData.agregarTarea;
              //this.tareas.push(tareaTxt);
              this.servicioTareas.addTarea(tareaTxt);
            }
          }]

    });
    agregarAlerta.present();
  }///cierrer abrirAlerta


  reordena(){
    this.activado = !this.activado;
  }
  
  elementoReordenado($event){

    reorderArray(this.tareas,$event);
  }


  irAalmacen(){
    this.navCtrl.push(AlmacenTareasPage);
  }
}///clase
