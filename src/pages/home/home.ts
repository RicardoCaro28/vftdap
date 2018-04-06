import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tareas = [];
  public activado = false;

  constructor(public navCtrl: NavController, private alertController: AlertController) {

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
              this.tareas.push(tareaTxt);
            }
          }]

    });
    agregarAlerta.present();
  }///cierrer abrirAlerta


  reordena(){
    this.activado = !this.activado;
  }
  
}///clase
