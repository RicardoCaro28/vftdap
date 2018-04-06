import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicioTareasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioTareasProvider {
private tareas=[];
private tareasAlmacenadas=[];
  constructor(public http: HttpClient) {
    console.log('Hello ServicioTareasProvider Provider');
  }

  getTarea(){
    return this.tareas;
  }
  addTarea(tareaTxt){
    this.tareas.push(tareaTxt)
  }

  getAlmacen(){
    return this.tareasAlmacenadas;
  }

  alamacenarTarea(tareaIndex){
    let tareaAarchivar = this.tareas[tareaIndex];
    this.tareas.splice(tareaIndex,1);
    this.tareasAlmacenadas.push(tareaAarchivar);
  }


  editarTarea(tarea, tareaIndex){
    this.tareas[tareaIndex]=tarea; 
  }
}
