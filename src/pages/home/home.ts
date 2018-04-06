import { Component } from '@angular/core';
import { NavController,AlertController,reorderArray,ToastController } from 'ionic-angular';
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
     private servicioTareas: ServicioTareasProvider,
     private toastController: ToastController
    
    ) {
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
              agregarAlerta.onDidDismiss(()=>{
                let agregaToast = this.toastController.create({
                  message:"La tarea fue agregada",
                  duration: 3000
                });
                agregaToast.present();
              })

              
              
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


  alamacenarTarea(tareaIndex){
    this.servicioTareas.alamacenarTarea(tareaIndex);
  }


  editarTarea(tareaIndex){
    let editaAlerta = this.alertController.create({
        title:"Editar Tarea",
        message:"Edita tu tarea",
        inputs:[{
          type:"text",name:"editaTarea", value:this.tareas[tareaIndex]
        }],
        buttons:[{
          text:"cancelar"},
          {
            text:"Editar", 
            handler:(inputData) =>{
              let tareaTxt;
              tareaTxt = inputData.editaTarea;
              //this.tareas.push(tareaTxt);
              this.servicioTareas.editarTarea(tareaTxt,tareaIndex);
              editaAlerta.onDidDismiss(()=>{
                let editaToast = this.toastController.create({
                  message:"La tarea fue modificada",
                  duration: 3000
                });
                editaToast.present();
              })

              
              
            }
          }]

    });
    editaAlerta.present();
  }///cierrer abrirAlerta

}///clase
