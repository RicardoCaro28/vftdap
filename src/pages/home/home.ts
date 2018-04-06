import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
            text:"Agregar"
          }]

    });
    agregarAlerta.present();
  }///cierrer abrirAlerta
  
}///clase
